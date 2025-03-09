import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/entity';
import { TaskStatusEnum } from './task.enum';
import User from '../user/user.model';

@Entity('tasks')
export default class Task extends BaseEntity {
    @Column({ nullable: false, length: 50 })
    title!: string;

    @Column({ nullable: false, length: 255 })
    description!: string;

    @Column({ nullable: false })
    userId!: string;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'userId' })
    user?: User | null;

    @Column({ type: "enum", enum: TaskStatusEnum, default: TaskStatusEnum.TO_START })
    status!: TaskStatusEnum;
}