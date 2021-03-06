import { EntityRepository, Repository } from 'typeorm';
import Discipline from '../models/Discipline';

@EntityRepository(Discipline)
export default class ClassRepository extends Repository<Discipline> {
  public async findByName(name: string): Promise<Discipline[]> {
    return this.find({
      where: { name },
    });
  }
}
