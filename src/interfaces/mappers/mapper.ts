export interface Mapper<D, R> {
  toDomain(entity: D): any;
  toResponse(entity: R): any;
}
