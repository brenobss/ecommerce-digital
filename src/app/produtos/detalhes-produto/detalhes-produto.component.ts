import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined
  quantidade = 1

  constructor(
    private ProdutosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacao: NotificacaoService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const produtoId = Number(routeParams.get("id"))
    this.produto = this.ProdutosService.getOne(produtoId)
  }

  adicionarAoCarrinho(){
    this.notificacao.notificar("O produto foi adicionado ao carrinho")
  }

}
