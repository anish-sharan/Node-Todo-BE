import { v4 as uuidv4 } from 'uuid';
import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    BeforeInsert,
    BeforeUpdate
} from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuidv4();

    @Column({ nullable: false, default: true })
    active: boolean = true;

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updatedDate!: Date;

    @Column({ type: 'uuid', nullable: true })
    createdBy?: string;

    @Column({ type: 'uuid', nullable: true })
    updatedBy?: string;

    @BeforeInsert()
    setCreationDetails(): void {
        this.createdDate = new Date();
    }

    @BeforeUpdate()
    setUpdateDetails(): void {
        this.updatedDate = new Date();
    }
}
