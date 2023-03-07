import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules.entity";

@Entity("real_estate")
class RealEstate {  

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column( { type: "boolean", default: true } )
    sold: boolean = false

    @Column( { type: "decimal", precision: 12, scale: 2, default: 0 } )
    value: number | string

    @Column( { type: "integer" } )
    size: number 

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category

}

export {
    RealEstate
}