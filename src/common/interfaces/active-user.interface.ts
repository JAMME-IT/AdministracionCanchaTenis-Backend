import { Rol } from "../enums/rol.enum";

export interface UserActiveInterface {
    idUsuario: number;
    roles: Rol[];
}
