# Projeto IBT Landing Page

## Stack
- Astro
- Tailwind CSS
- @lucide/astro
- Componentes em src/components
- Página principal em src/pages/index.astro
- Imagens em src/assets/images

## Objetivo
Criar uma landing page curta e responsiva para Gestão de Riscos Psicossociais e apoio à NR-1.

## Regras importantes
- Não alterar Header.astro nem Hero.astro sem solicitação explícita.
- Não criar arquivos de dados externos.
- Cada componente deve conter seus próprios arrays de conteúdo.
- Não alterar global.css.
- Usar apenas classes Tailwind nos componentes.
- Não instalar novas dependências.
- Usar ícones de @lucide/astro.
- Manter todos os componentes totalmente responsivos.
- Não usar preços.
- Não inventar informações institucionais.

## Identidade visual
- Cor principal: #36C5BA
- Verde escuro: #147B75
- Texto principal: #071F31
- Texto secundário: #42545F
- Fundo claro: #FDFDFB
- Fundo alternativo: #F5F8F7

## Padrão dos títulos das seções
Usar exatamente esta escala:

text-[clamp(2rem,8vw,2.9rem)]
sm:text-[clamp(2.4rem,5.8vw,3.2rem)]
lg:text-[clamp(2.45rem,3.4vw,2.9rem)]
xl:text-[46px]
font-extrabold
leading-[1.12]
tracking-[-0.04em]

## Padrão do texto introdutório
- font-size: 16px
- line-height: 1.65
- largura máxima: 720px
- cor: #42545F
- parágrafos curtos, com no máximo 2 ou 3 linhas no desktop

## Direção visual
- Simples e premium
- Inspirado em páginas de psicologia do Framer
- Bastante espaço em branco
- Bordas suaves
- Sombras discretas
- Sem excesso de efeitos decorativos
- No máximo 6 itens por seção
- Evitar repetir exatamente o mesmo layout em todas as seções
- Preservar seções que usam imagens conforme os arquivos existentes

## CTA principal
Usar sempre o texto:
Falar com um especialista

O CTA deve apontar para WhatsApp e manter o mesmo estilo visual da Hero.

## Conteúdo das seções
1. Hero: já existente, não alterar.
2. Dores e desafios.
3. Como funciona.
4. O que avaliamos.
5. O que a empresa recebe.
6. Benefícios.
7. Formas de contratação.
8. Por que escolher o IBTPSICANALISE.
9. Perguntas frequentes.
10. Chamada final e formulário.
11. Rodapé.
12. Botão flutuante de WhatsApp.

## Validação
Após editar:
1. Executar npm run build.
2. Corrigir todos os erros encontrados.
3. Verificar imports inexistentes.
4. Verificar se index.astro importa somente componentes existentes.
5. Não encerrar a tarefa enquanto o build estiver quebrado.