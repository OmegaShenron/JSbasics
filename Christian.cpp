#include <stdio.h>
#include <stdlib.h>
//Columnas y filas que tendra mi arreglo bidimensional


int main() {
    //Declarar mi arreglo bidimensional como mi direccional del personaje (dir)
    int pX = 5, pY = 1, col =25, row=  15;
    char mundo[row][col];
    char dir;
    do {
        //Iniciar fondo 
        for (int j = 0; j < row; j++)
            //Implementar el marco de "X"
            for (int i = 0; i < col; i++)
                if (i == 0 || j == 0 || j == row - 1 || i == col - 1)
                    mundo[j][i] = 'X';
                else
                    mundo[j][i] = ' ';
        fflush(stdout);
        //Poner personaje
        mundo[pY][pX] = 'u';
        //Imprimir mundo
        system("cls");
        for (int j = 0; j < row; j++) {
            for (int i = 0; i < col; i++)
                printf("%c", mundo[j][i]);
            printf("\n");
        }
        
        printf("\n");
        fflush(stdout);
        scanf_s("%c", &dir);
        //Declarar mis flechas con el cual se movera mi personaje y el boton del termino del programaa (p)
        switch (dir) {
        case 'a':pX--; break;
        case 'd':pX++; break;
        case 's':pY++; break;
        case 'w':pY--; break;
        case 'p':break;

        }

    } while (dir != 'p');

    return 0;;
}