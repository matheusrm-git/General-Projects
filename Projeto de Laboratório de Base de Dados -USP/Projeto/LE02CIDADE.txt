db.createCollection('LE02CIDADE');
db.LE02CIDADE.insert({
NOME:'Sao Carlos',
SIGLAESTADO:
{
SIGLA:'SP',
NOME:'São Paulo'
},
POPULACAO:200000
});

db.LE02CIDADE.insert({
NOME:'Sao Paulo',
SIGLAESTADO:
{
SIGLA:'SP',
NOME:'São Paulo'
},
POPULACAO:1000000
});

db.LE02CIDADE.insert({
NOME:'Sao Caetano',
SIGLAESTADO:
{
SIGLA:'SP',
NOME:'São Paulo'
},
POPULACAO:300000
});

db.LE02CIDADE.insert({
NOME:'Campinas',
SIGLAESTADO:
{
SIGLA:'SP',
NOME:'São Paulo'
},
POPULACAO:250000
});

db.LE02CIDADE.insert({
NOME:'Sao Roque',
SIGLAESTADO:
{
SIGLA:'SP',
NOME:'São Paulo'
},
POPULACAO:100000
});

db.LE02CIDADE.insert({
NOME:'Florianopolis',
SIGLAESTADO:
{
SIGLA:'SC',
NOME:'Santa Catarina'
},
POPULACAO:150000
});

db.LE02CIDADE.insert({
NOME:'Fraiburgo',
SIGLAESTADO:
{
SIGLA:'SC',
NOME:'Santa Catarina'
},
POPULACAO:10000
});

db.LE02CIDADE.insert({
NOME:'Joinville',
SIGLAESTADO:
{
SIGLA:'SC',
NOME:'Santa Catarina'
},
POPULACAO:300000
});

db.LE02CIDADE.insert({
NOME:'Blumenau',
SIGLAESTADO:
{
SIGLA:'SC',
NOME:'Santa Catarina'
},
POPULACAO:160000
});

db.LE02CIDADE.insert({
NOME:'Crisciuma',
SIGLAESTADO:
{
SIGLA:'SC',
NOME:'Santa Catarina'
},
POPULACAO:130000
});

db.LE02CIDADE.insert({
NOME:'Palmas',
SIGLAESTADO:
{
SIGLA:'TO',
NOME:'Tocantins'
},
POPULACAO:300000
});

db.LE02CIDADE.insert({
NOME:'Guaral',
SIGLAESTADO:
{
SIGLA:'TO',
NOME:'Tocantins'
},
POPULACAO:30000
});

db.LE02CIDADE.insert({
NOME:'Araguaina',
SIGLAESTADO:
{
SIGLA:'TO',
NOME:'Tocantins'
},
POPULACAO:100000
});

db.LE02CIDADE.insert({
NOME:'Porto Nacional',
SIGLAESTADO:
{
SIGLA:'TO',
NOME:'Tocantins'
},
POPULACAO:200000
});

db.LE02CIDADE.insert({
NOME:'Araguatins',
SIGLAESTADO:
{
SIGLA:'TO',
NOME:'Tocantins'
},
POPULACAO:120000
});

db.LE02CIDADE.insert({
NOME:'Fortaleza',
SIGLAESTADO:
{
SIGLA:'CE',
NOME:'Ceará'
},
POPULACAO:500000
});

db.LE02CIDADE.insert({
NOME:'Caucaia',
SIGLAESTADO:
{
SIGLA:'CE',
NOME:'Ceará'
},
POPULACAO:400000
});

db.LE02CIDADE.insert({
NOME:'Sobral',
SIGLAESTADO:
{
SIGLA:'CE',
NOME:'Ceará'
},
POPULACAO:100000
});

db.LE02CIDADE.insert({
NOME:'Crato',
SIGLAESTADO:
{
SIGLA:'CE',
NOME:'Ceará'
},
POPULACAO:200000
});

db.LE02CIDADE.insert({
NOME:'Juazeiro do Norte',
SIGLAESTADO:
{
SIGLA:'CE',
NOME:'Ceará'
},
POPULACAO:140000
});

db.LE02CIDADE.insert({
NOME:'Manaus',
SIGLAESTADO:
{
SIGLA:'AM',
NOME:'Amazonas'
},
POPULACAO:300000
});

db.LE02CIDADE.insert({
NOME:'Parintins',
SIGLAESTADO:
{
SIGLA:'AM',
NOME:'Amazonas'
},
POPULACAO:200000
});

db.LE02CIDADE.insert({
NOME:'Humaita',
SIGLAESTADO:
{
SIGLA:'AM',
NOME:'Amazonas'
},
POPULACAO:100000
});

db.LE02CIDADE.insert({
NOME:'Coari',
SIGLAESTADO:
{
SIGLA:'AM',
NOME:'Amazonas'
},
POPULACAO:250000
});

db.LE02CIDADE.insert({
NOME:'Maues',
SIGLAESTADO:
{
SIGLA:'AM',
NOME:'Amazonas'
},
POPULACAO:180000
});

db.LE02CIDADE.insert({
NOME:'Brasilia',
SIGLAESTADO:
{
SIGLA:'DF',
NOME:'Distrito Federal'
},
POPULACAO:200000
});

db.LE02CIDADE.insert({
NOME:'Gama',
SIGLAESTADO:
{
SIGLA:'DF',
NOME:'Distrito Federal'
},
POPULACAO:80000
});

db.LE02CIDADE.insert({
NOME:'Ceilandia',
SIGLAESTADO:
{
SIGLA:'DF',
NOME:'Distrito Federal'
},
POPULACAO:70000
});

db.LE02CIDADE.insert({
NOME:'Taguatinga',
SIGLAESTADO:
{
SIGLA:'DF',
NOME:'Distrito Federal'
},
POPULACAO:230000
});

db.LE02CIDADE.insert({
NOME:'Sobradinho',
SIGLAESTADO:
{
SIGLA:'DF',
NOME:'Distrito Federal'
},
POPULACAO:90000
});

db.LE02CIDADE.ensureIndex({NOME:1})
db.LE02CIDADE.ensureIndex({SIGLAESTADO:1})
