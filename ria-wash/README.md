# RIA WASH — frontend inicial

Frontend responsivo para a lavanderia RIA WASH, desenvolvido com React e Vite.

## O que já funciona
- Carrossel de banners com rotação automática a cada 5,5 segundos.
- Navegação pelos indicadores e botões anterior/próximo.
- Layout responsivo para desktop, tablet e celular.
- Seções de serviços, painel demonstrativo de máquinas, como funciona e benefícios.
- Menu mobile.
- Modal de entrada demonstrativo e mensagens de feedback.
- Estrutura visual preparada para futuras integrações com Supabase, pagamentos e controladores de máquinas.

## Requisitos
- Node.js 20.19+ ou 22.12+ recomendado (compatível com versões atuais do Vite).
- npm.

## Executar no Visual Studio Code
1. Extraia o arquivo ZIP e abra a pasta `ria-wash` no VS Code.
2. Abra Terminal → New Terminal.
3. Execute:

   ```bash
   npm install
   npm run dev
   ```

4. Abra o endereço local mostrado no terminal (normalmente `http://localhost:5173`).

## Gerar versão de produção

```bash
npm run build
npm run preview
```

## Importante
Esta é uma primeira versão de frontend com dados ilustrativos. Login, cadastro, reservas, preços, carteira Pix, pedidos, notificações e status real das máquinas ainda não estão conectados a um backend. Não use a interface demonstrativa para receber pagamentos reais nem para controlar equipamentos.
