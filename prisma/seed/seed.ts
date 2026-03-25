import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Iniciando el sembrado de la base de datos...');

    // 1. Crear los Roles base si no existen
    const nombresRoles = ['Admin', 'Socio', 'Invitado'];
    const rolesIds: Record<string, number> = {};

    for (const nombre of nombresRoles) {
        // Buscamos si el rol ya existe
        let rol = await prisma.rol.findFirst({ where: { nombre: nombre as any } });

        // Si no existe, lo creamos
        if (!rol) {
            rol = await prisma.rol.create({ data: { nombre: nombre as any } });
        }
        rolesIds[nombre] = rol.id; // Guardamos el ID para usarlo después
    }
    console.log('✅ Roles verificados/creados');

    // 2. Crear el Usuario Administrador por defecto
    const emailAdmin = 'admin@canchas.com';
    let admin = await prisma.usuario.findUnique({ where: { email: emailAdmin } });

    if (!admin) {
        admin = await prisma.usuario.create({
            data: {
                email: emailAdmin,
                password: bcrypt.hashSync('admin123', 10), // ¡Clave por defecto!
                nombre: 'Super',
                apellido: 'Administrador',
                dni: 11111111,
                telefono: '0000000000',
            },
        });
        console.log(
            '✅ Usuario Administrador creado (admin@canchas.com / admin123)'
        );
    }

    // 3. Asignar el rol de Admin (ID que sacamos en el paso 1) a este usuario
    const relacionExiste = await prisma.usuarioRol.findUnique({
        where: {
            idUsuario_idRol: { idUsuario: admin.id, idRol: rolesIds['Admin'] },
        },
    });

    if (!relacionExiste) {
        await prisma.usuarioRol.create({
            data: { idUsuario: admin.id, idRol: rolesIds['Admin'] },
        });
        console.log('✅ Rol de Súper Admin asignado al usuario');
    }

    console.log('🎉 ¡Sembrado completado con éxito!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
