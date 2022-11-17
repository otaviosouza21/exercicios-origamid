#include <stdio.h>
#include <iostream>
using namespace std;

struct info_pessoa
{
	char nome[50];
	int idade;
	float altura;
	float peso;
	int sexo;
	float quadril;
	float cintura;
};

float calcimc(float peso,float altura){
	return (peso/(altura*2));
}

float calcrcq(float quadril,float cintura){
    return (quadril/cintura);
}

int main (){
	
	struct info_pessoa pessoa[20];
	int opc;
	int quant;
	int i;
	int opc_1;
	int opc_2;
	float imc;
	int opc_3;
	int opc_4;
	float soma_imc;
	float media_imc;
	float soma_rcq;
	float media_rcq;
do{

	system("cls");

	cout << "========Relatorio IMC e RCQ========\n";
	cout << "1- Acrescentar Pessoa\n" << "2- Conferir relatorio\n\n";
	cout << "Digite a opcao desejada: ";
	cin >> opc;
	
	
	if (opc == 1){
	 
	 cout<< "Quantas pessoas deseja acrescentar?";
	 cin >> quant;
	
	for(i=0;i<quant;i++){
	
	system("cls");
	
	printf("============Pessoa %d===========\n",i+1);
	cout << "Nome: ";
	cin >> pessoa[i].nome;
	cout << "Idade: ";
	cin >> pessoa[i].idade;
	cout << "Altura: ";
	cin >> pessoa[i].altura;
	cout << "Peso: ";
	cin >> pessoa[i].peso;
	cout << "Quadril: ";
	cin  >> pessoa[i].quadril;
	cout <<"Cintura: ";
	cin >> pessoa[i].cintura;
	cout <<"Sexo: 1-Feminino ou 2-Masculino ";
	cin >> pessoa[i].sexo;
	
	
	cout << calcimc(pessoa[i].peso,pessoa[i].altura);
	
	cout <<"\n\nO que deseja fazer?\n";
	printf("1- Verificar IMC da pessoa %d\n",i+1);
	printf("2- Verificar RCQ da pessoa %d\n",i+1);
	cout <<"3- Registrar proxima pessoa\n";
	cout <<"Opcao: ";
	cin >> opc_1;
	
	if(opc_1==1){
		
		
	system("cls");
	cout<< "O IMC de " << pessoa[i].nome <<" eh " << calcimc(pessoa[i].peso,pessoa[i].altura)<<"\n";
		
		if(calcimc(pessoa[i].peso,pessoa[i].altura)<18.5){
			cout<<"O IMC de " << pessoa[i].nome << " esta abaixo do normal\n\n ";
	    	}else 
	    	
		    if(calcimc(pessoa[i].peso,pessoa[i].altura)>18.5 && calcimc(pessoa[i].peso,pessoa[i].altura)<24.9){
			cout<<"O IMC de " << pessoa[i].nome << " eh  avaliado como Normal\n\n ";
		        }else
		        
		        if(calcimc(pessoa[i].peso,pessoa[i].altura)>24.9 && calcimc(pessoa[i].peso,pessoa[i].altura)<29.9){
			    cout<<"O IMC de " << pessoa[i].nome << " eh  avaliado como Excesso de peso\n\n ";
	            	}else
	            	
	            	if(calcimc(pessoa[i].peso,pessoa[i].altura)>30){
		        	cout<<"O IMC de " << pessoa[i].nome << " eh  avaliado como Obesidade\n\n";
		}
	
	cout <<"1- Verificar RCQ\n";
	cout <<"2- Registrar proxima pessoa\n";
	cin>>opc_2;
	
	if(opc_1==2 || opc_2==1){
	    cout<<"calculo de RCQ";
	    cin>>opc;
	}
	else{
	cout <<"1- Verificar IMC\n";
	cout <<"2- Registrar proxima pessoa\n";
	cin >> opc_3;
	
	}
	
}
	else if(opc_1==2){
	    system("cls");
	    cout<< "O RCQ de " << pessoa[i].nome <<" eh " << calcrcq(pessoa[i].quadril,pessoa[i].cintura)<<"\n";
	    
	    if(calcrcq(pessoa[i].quadril,pessoa[i].cintura)<=0.8 && pessoa[i].sexo==1){
			cout<<"O RCQ de " << pessoa[i].nome << " Tem risco baixo a saude\n\n ";}
			
			else if(calcrcq(pessoa[i].quadril,pessoa[i].cintura)<=0.95 && pessoa[i].sexo==2){
			cout<<"O RCQ de " << pessoa[i].nome << " Tem risco baixo a saude\n\n ";	
			}
				else if (calcrcq(pessoa[i].quadril,pessoa[i].cintura)>0.81 && calcrcq(pessoa[i].quadril,pessoa[i].cintura)<0.85 && pessoa[i].sexo==1){
				cout<<"O RCQ de " << pessoa[i].nome << " Tem risco moderado a saude\n\n ";
				}
					else if (calcrcq(pessoa[i].quadril,pessoa[i].cintura)>0.96 && calcrcq(pessoa[i].quadril,pessoa[i].cintura)<1 && pessoa[i].sexo==2){
					cout<<"O RCQ de " << pessoa[i].nome << " Tem risco moderado a saude\n\n ";
					}
						else if (calcrcq(pessoa[i].quadril,pessoa[i].cintura)>0.86 && pessoa[i].sexo==1){
						cout<<"O RCQ de " << pessoa[i].nome << " Tem risco Alto a saude\n\n ";
						}
							else if (calcrcq(pessoa[i].quadril,pessoa[i].cintura)>1 && pessoa[i].sexo==1){
							cout<<"O RCQ de " << pessoa[i].nome << " Tem risco Alto a saude\n\n ";
							}
							
	cout <<"1- Verificar IMC\n";
	cout <<"2- Registrar proxima pessoa\n";
	cin >> opc_4;
	}
	}	
	while(opc_4==1);
	
	
	
	

	
}

else if(opc==2){
	for(int y=0;y<quant;y++){
		system("cls");
		cout<<"Pessoa-"<<y+i<<"\n";
		cout<<"Nome: "<<pessoa[y].nome<<"\n";
		cout<<"Idade: "<<pessoa[y].idade<<"\n";
		cout<<"Altura: "<<pessoa[y].altura<<"\n";
		cout<<"Peso: "<<pessoa[y].peso<<"\n";
		cout<<"Quadril: "<<pessoa[y].quadril<<"\n";
		cout<<"Cintura: "<<pessoa[y].cintura<<"\n";
		if(pessoa[y].sexo==1){
			cout<<"Sexo: Feminino"<<"\n";
		}else{
			cout<<"Sexo: Masculino"<<"\n\n";
		}
		cout<<"IMC: "<<calcimc(pessoa[y].peso,pessoa[y].altura)<<"\n";
		cout<<"ICQ: "<<calcrcq(pessoa[y].quadril,pessoa[y].cintura)<<"\n";
		cout<<"================================\n";
	}
	
	    cout<<"===========Estatísticas=========\n";
	    for(i=0;i<quant;i++){
	    soma_imc = soma_imc+calcimc(pessoa[i].peso,pessoa[i].altura);
	    soma_rcq = soma_rcq+calcrcq(pessoa[i].quadril,pessoa[i].cintura);
	    }
	    media_imc = soma_imc/quant;
	    media_rcq = soma_rcq/quant;
	    cout<<"A media de IMC entre as pessoas é de: "<<media_imc;
	    cout<<"A media de IMC entre as pessoas é de: "<<media_rcq;
	    
	break;
	
}

}


while(opc!=5);

}


