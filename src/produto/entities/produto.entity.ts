import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Categoria } from '../../categoria/entities/categoria.entity';
@Entity({name: 'tb_produto'})
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos,{ 
        
        onDelete: 'CASCADE'
    })
    categoria: Categoria;
}