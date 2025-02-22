import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    { //1
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdc/17497973.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p87/pdc/17497974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/pdc/17497976.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/pdc/17497978.jpg?format=gallery-medium'
      ],
      name: 'Notestand',
      description: 'Подставка для ноутбука.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000'
    },
    {//2
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hea/69003731075102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/hf8/69003731599390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/hcb/79822872281118.jpg?format=gallery-medium'
      ],
      name: 'Сумка Portcase 9011',
      description: 'Предназначен для удобной переноски и защиты устройства.',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000'
    },
    {//3
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h57/63760532733982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/hb2/63760533192734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/ha2/63760533717022.jpg?format=gallery-medium'
      ],
      name: 'Wi-Fi роутер TP-LINK TD-W8961N',
      description: 'Модель TD-W8961N выполняет работу нескольких сетевых устройств.',
      rating: 4.5,
      link: 'http://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000'
    },
    {//4
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/h9f/65094363021342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/h3b/65094363283486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h4b/65094363545630.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h19/h19/65094207340574.jpg?format=gallery-medium'
      ],
      name: 'Рюкзак OEM 102011-141217 черный',
      description: 'Предназначен для удобной переноски и защиты устройства.',
      rating: 3.9,
      link: 'https://kaspi.kz/shop/p/rjukzak-oem-102011-141217-chernyi-107354519/?c=750000000'
    },
    {//5
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h50/hc5/87325424582686.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h5c/87325424648222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/h1f/87325424713758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h12/87325424779294.jpg?format=gallery-medium'
      ],
      name: 'SSD Kingston SA400S37/480G 480 Гб',
      description: 'SSD-накопитель Kingston A400 имеет достаточно большую емкость (480 ГБ).',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480g-480-gb-6800659/?c=750000000'
    },
    {//6
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/hdc/86540810387486.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he1/h99/86540810584094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/h3f/86540810518558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h54/86540810649630.jpg?format=gallery-medium'
      ],
      name: 'Принтер Xprinter XP-365B',
      description: 'Простой и недорогой настольный принтер этикеток с прямой термопечатью.',
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/xprinter-xp-365b-102105499/?c=750000000'
    },
    {//7
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/had/84497680269342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/h31/84497680334878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/hbd/84497680400414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h62/84497680465950.jpg?format=gallery-large'
      ],
      name: 'LINEUP i5-12400F/ RTX 4060/ 32GB/ SSD 1024 Гб/ Win 11 Pro',
      description: 'Универсальная модель, оснащённая процессором Intel Core i5.',
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/lineup-newcomponents2-chernyi-114538061/?c=750000000'
    },
    {//8
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-large'
      ],
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      description: 'MacBook Air 2022 года один из крупнейших обновлений линейки за всю историю.',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {//8
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h13/h0f/63885265829918.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h1a/63885269991454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/hd6/63885271105566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h81/63885273071646.jpg?format=gallery-medium'
      ],
      name: 'Wi-Fi роутер TP-LINK Archer C80',
      description: 'Двухдиапазонный роутер TP-LINK Archer C80 выполнен в черном цвете.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c80-100663389/?c=750000000'
    },
    {//9
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0e/p5b/3114048.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p97/p5d/3114050.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p5d/3114052.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p5d/3114053.png?format=gallery-medium'
      ],
      name: 'Wi-Fi адаптер R&A RA-BS314',
      description: 'Этот wifi адаптер для компьютера позволит легко подключиться к беспроводной сети.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/wi-fi-adapter-r-a-ra-bs314-128513849/?c=750000000'
    },
    {//10
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h6d/84362187145246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h24/84362187276318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/hcb/84362187472926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h2d/84362187603998.jpg?format=gallery-medium'
      ],
      name: 'Сумка 18499000_308776 серый',
      description: 'Предназначен для удобной переноски и защиты устройства.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/sumka-18499000-308776-seryi-114096695/?c=750000000'
    },

  ];
  shareOnTelegram(link: string) {
    const username = "y_daryn";
    const message = encodeURIComponent(`Check this product: ${link}`);

    window.open(`https://t.me/${username}?text=${message}`, '_blank');
  }



}
