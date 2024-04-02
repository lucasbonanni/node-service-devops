import { IsNotEmpty, IsString, MinLength, IsNumber } from "class-validator"

export class CodeDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly name: string

    @IsNotEmpty()
    @IsString()
    readonly description: string

    @IsNotEmpty()
    @IsNumber()
    readonly value: number
}