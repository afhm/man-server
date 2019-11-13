import { IsOptional, IsString, ValidateNested, IsDate } from "class-validator";
// import CreateAddressDto from "../address/address.dto";

class CreateUserDto {
  @IsString()
  public username!: string;

  @IsString()
  public email!: string;

  @IsString()
  public password!: string;

  // @IsDate()
  // public created_at!: string;

  // @IsDate()
  // public updated_at!: string;

  // @IsOptional()
  // @ValidateNested()
  // public address?: CreateAddressDto;
}

export default CreateUserDto;
