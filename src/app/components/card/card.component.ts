import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  ///src/styles/card.component.scss   seria este o path para colocarmos o scss respetivo na styles folder mas tá a dar 2 erros por isso fica aqui para já
  /* 
  
Error: Module not found: Error: Can't resolve 'C:/BonsaiWebsite/my-bonsai-corner-page/src/app/components/card/src/styles/card.component.scss' in 'C:\BonsaiWebsite\my-bonsai-corner-page'

Error: The loader "C:/BonsaiWebsite/my-bonsai-corner-page/src/app/components/card/src/styles/card.component.scss" didn't return a string.
  
  */
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
