db.createCollection('LE01ESTADO');
db.LE01ESTADO.insert({
SIGLA:'AC',
NOME:'Acre'
});

db.LE01ESTADO.insert({
SIGLA:'AL',
NOME:'Alagoas'
});

db.LE01ESTADO.insert({
SIGLA:'AP',
NOME:'Amapá'
});

db.LE01ESTADO.insert({
SIGLA:'AM',
NOME:'Amazonas'
});

db.LE01ESTADO.insert({
SIGLA:'BA',
NOME:'Bahia'
});

db.LE01ESTADO.insert({
SIGLA:'CE',
NOME:'Ceará'
});

db.LE01ESTADO.insert({
SIGLA:'DF',
NOME:'Distrito Federal'
});

db.LE01ESTADO.insert({
SIGLA:'ES',
NOME:'Espírito Santo'
});

db.LE01ESTADO.insert({
SIGLA:'GO',
NOME:'Goiás'
});

db.LE01ESTADO.insert({
SIGLA:'MA',
NOME:'Maranhão'
});

db.LE01ESTADO.insert({
SIGLA:'MT',
NOME:'Mato Grosso'
});

db.LE01ESTADO.insert({
SIGLA:'MS',
NOME:'Mato Grosso do Sul'
});

db.LE01ESTADO.insert({
SIGLA:'MG',
NOME:'Minas Gerais'
});

db.LE01ESTADO.insert({
SIGLA:'PR',
NOME:'Paraná'
});

db.LE01ESTADO.insert({
SIGLA:'PB',
NOME:'Paraíba'
});

db.LE01ESTADO.insert({
SIGLA:'PA',
NOME:'Pará'
});

db.LE01ESTADO.insert({
SIGLA:'PE',
NOME:'Pernambuco'
});

db.LE01ESTADO.insert({
SIGLA:'PI',
NOME:'Piauí'
});

db.LE01ESTADO.insert({
SIGLA:'RN',
NOME:'Rio Grande do Norte'
});

db.LE01ESTADO.insert({
SIGLA:'RS',
NOME:'Rio Grande do Sul'
});

db.LE01ESTADO.insert({
SIGLA:'RJ',
NOME:'Rio de Janeiro'
});

db.LE01ESTADO.insert({
SIGLA:'RO',
NOME:'Rondônia'
});

db.LE01ESTADO.insert({
SIGLA:'RR',
NOME:'Roraima'
});

db.LE01ESTADO.insert({
SIGLA:'SC',
NOME:'Santa Catarina'
});

db.LE01ESTADO.insert({
SIGLA:'SE',
NOME:'Sergipe'
});

db.LE01ESTADO.insert({
SIGLA:'SP',
NOME:'São Paulo'
});

db.LE01ESTADO.insert({
SIGLA:'TO',
NOME:'Tocantins'
});

db.LE01ESTADO.ensureIndex({SIGLA:1})
