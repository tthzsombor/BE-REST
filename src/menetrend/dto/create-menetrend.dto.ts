import { IsDate, IsDefined, IsString } from "class-validator";

export class CreateMenetrendDto {
   @IsString()
    allomas: String;

    @IsDate()
    @IsDefined()
    erkezes: Date;
}
