import { User } from '@domain/entities/user';
import { UserRepository } from '@domain/repositories/user-repository';
import { db } from '@infrastructure/database/drizzle/client';
import { userDrizzleSchema } from '@infrastructure/database/drizzle/schema';
import { userMapper } from '@interfaces/mappers/user-mapper';
import { eq } from 'drizzle-orm';

export class UserRepositoryDrizzle implements UserRepository {
  async save(user: User): Promise<void> {
    const userDrizzle: typeof userDrizzleSchema.$inferInsert = {
      id: user.id,
      name: user.name,
      email: user.email.value,
      password: user.password.value,
    };

    await db.insert(userDrizzleSchema).values(userDrizzle);
  }

  async delete(id: string): Promise<void> {
    await db.delete(userDrizzleSchema).where(eq(userDrizzleSchema.id, id));
  }

  async list(): Promise<User[]> {
    const usersDrizzle = await db.query.userDrizzleSchema.findMany();

    return usersDrizzle.map((row) => userMapper.toDomain(row));
  }

  async findById(id: string): Promise<User | null> {
    const userDrizzle = await db.query.userDrizzleSchema.findFirst({ where: eq(userDrizzleSchema.id, id) });

    return userDrizzle ? userMapper.toDomain(userDrizzle) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDrizzle = await db.query.userDrizzleSchema.findFirst({ where: eq(userDrizzleSchema.email, email) });

    return userDrizzle ? userMapper.toDomain(userDrizzle) : null;
  }
}
