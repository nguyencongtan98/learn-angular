import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], id: string, name: string, status: string): any {
    console.log(id);
    console.log(name);
    console.log(status);
    if (!id && !name && !status) {
      return products;
    }
    if (id) {
      return (products = products.filter((item) => item.id == id));
    }
    if (name) {
      return (products = products.filter((item: any) =>
        item.name.toLowerCase().includes(name)
      ));
    }

    if (status) {
      return (products = products.filter(
        (item: any) => item.status.toString() == status
      ));
    }
    return products;
  }
}
