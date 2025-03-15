/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: itrident <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/03/15 05:30:01 by itrident          #+#    #+#             */
/*   Updated: 2025/03/15 05:30:11 by itrident         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putchar(char c)
{
	write(1, &c, 1);
}

int	rush(int x, int y)
{
	int	x_;
	int	y_;

// Verificar tamanho <=zero
	if (x <= 0 || y <=0)
		write(1, "Insira apenas valores inteiros positivos\n", 41);
//x = largura ou coluna
	x_ = 1;
//y = altura ou linha
	y_ = 1;
	while (y_ <= y)
	{
		while (x_ <= x)
		{
//(Primeira coluna da primeira linha) OU (última coluna da última linha   E NÃO É uma matriz linha ou coluna)
			if ((x_ == 1 && y_ == 1) || (x_ == x && y_ == y && x_ != 1 && y_ != 1))
				ft_putchar('A');
//Última coluna da primeira linha E primeira coluna da última linha
			else if ((x_ == x && y_ == 1) || (x_ == 1 && y_ == y) )
				ft_putchar('C');
//Quando não for nem a última coluna nem a última linha
			else if (((x_ != x) && (y_ != 1) && (y_!= y) && (x_ != 1)))
				ft_putchar(' ');
//Quando for a última de um e não for o último de outro
			else
				ft_putchar('B');
			x_++;
		}
		write(1, "\n", 2);
		x_ = 1;
		y_++;
	}
	return (0);
}

int main(void)
{
	rush (5, 3);
	write(1, "\n", 2);

	rush (5, 1);
	write(1, "\n", 2);

	rush (0, 0);
	write(1, "\n", 2);

	rush (1, 5);
	write(1, "\n", 2);

	rush (4, 4);
	write(1, "\n", 2);

	return 0;
}
