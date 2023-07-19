export class PaginationModel<T> {
  constructor(
    public page: number,
    public pageSize: number,
    public totalElements: number = 0,
    public data: T[] = []
  ) {
  }
}
