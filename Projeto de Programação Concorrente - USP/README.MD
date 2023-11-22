# PROJETO DE PROGRAMAÇÃO CONCORRENTE

O projeto consiste em uma análise do mesmo algoritmo (Método de Gauss-Jacobi) de maneira sequencial e paralela.

Para isso foram criados 3 arquivos:

* jacobi_seq.c
* jacobi_paralel.c
* jacobi_mpi.c

O primeiro arquivo representa o algoritmo de maneira sequêncial. Já o segundo representa o mesmo algoritmo, porém paralelizado por meio de threads. Por fim o terceiro é também uma paralelização, porém com a utilização de trocas de mensagens, baseadas no protocolo MPI.