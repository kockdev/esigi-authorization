import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { ModuleEntity } from "src/app/module/module.entity";
import { ScreensEntity } from "src/app/screens/screens.entity";

export class CreateRoleDto {

    @IsNumber()
    @IsNotEmpty()
    identifier: number;

    @IsNotEmpty()
    name: string;

    @IsOptional()
    Modules: ModuleEntity[];

    @IsOptional()
    Screens: ScreensEntity[];
}
