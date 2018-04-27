export class Pagination {
    pageSize: number;
    pageNumber: number;
    total: number;
}

export class PageData<T> {
    data: T;
    pageination: Pagination = new Pagination();
}
