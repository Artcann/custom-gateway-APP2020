import { ValeurTest } from '../model/ValeurTest.entity';
import { Injectable, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import * as SerialPort from 'serialport';
import { Connection } from 'typeorm';
import { join } from 'path';

@Injectable()
export class UpwardService implements OnModuleInit{

    constructor(private connection: Connection) { };

    onModuleInit() {
        const port = new SerialPort('/dev/tty.AG4D-DevB', (err) => {
            this.handleError(err);
        });

        port.on('data', (data: any) => {
            console.log(data);
            
            port.write('test', (error) => {
                if (error) {
                    console.log(error);
                }
            })

            switch(data[0]) {
                case 0x31: {
                    this.insertStandardFrame(data);
                break;
                }
                
                case 0x32: {
                port.write(data, (err) => this.handleError(err));
                break;
                }

                case 0x33: {
                this.parseFastFrame(data);
                break;
                }

            }
        });
    
        port.on('error', function(err) {
            console.log('Error: ', err.message)
            })
        
    }

    async insertStandardFrame(data: Buffer) {

        let valeurTest = new ValeurTest();
        valeurTest.idCapteur = data[2];
        valeurTest.idTest = 43;
        valeurTest.trame = data.toString();
        console.log(data.toString());

        await this.connection.manager.save(valeurTest);
        return valeurTest;
    }

    private parseFastFrame(data: Buffer) {
        console.log(data);
    }

    private handleError(err: any) {
        if(err) return console.log('Error :', err.message);
    }
}
