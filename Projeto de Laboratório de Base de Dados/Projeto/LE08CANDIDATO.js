db.createCollection('LE08CANDIDATO');
var var0;
var0 = db.LE07PARTIDO.findOne({SIGLA: 'null'});
db.LE08CANDIDATO.insert({
NROCAND:0,
TIPO:'especial',
CPF:null,
NOME:'Branco',
IDADE:null,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'null'});
db.LE08CANDIDATO.insert({
NROCAND:-1,
TIPO:'especial',
CPF:null,
NOME:'Nulo',
IDADE:null,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PMDB'});
db.LE08CANDIDATO.insert({
NROCAND:1,
TIPO:'politico',
CPF:1,
NOME:'Jose',
IDADE:67,
APELIDO:'Ze',
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PTB'});
db.LE08CANDIDATO.insert({
NROCAND:2,
TIPO:'politico',
CPF:2,
NOME:'Antonio',
IDADE:34,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PDT'});
db.LE08CANDIDATO.insert({
NROCAND:3,
TIPO:'politico',
CPF:3,
NOME:'Hugo',
IDADE:37,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PT'});
db.LE08CANDIDATO.insert({
NROCAND:4,
TIPO:'politico',
CPF:4,
NOME:'Gabriel',
IDADE:44,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'DEM'});
db.LE08CANDIDATO.insert({
NROCAND:5,
TIPO:'politico',
CPF:5,
NOME:'Luiz',
IDADE:48,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PCdoB'});
db.LE08CANDIDATO.insert({
NROCAND:6,
TIPO:'politico',
CPF:6,
NOME:'Natan',
IDADE:39,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSB'});
db.LE08CANDIDATO.insert({
NROCAND:7,
TIPO:'politico',
CPF:7,
NOME:'Lucio',
IDADE:50,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSDB'});
db.LE08CANDIDATO.insert({
NROCAND:8,
TIPO:'politico',
CPF:8,
NOME:'William',
IDADE:55,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PTC'});
db.LE08CANDIDATO.insert({
NROCAND:9,
TIPO:'politico',
CPF:9,
NOME:'Fernando',
IDADE:68,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSC'});
db.LE08CANDIDATO.insert({
NROCAND:10,
TIPO:'politico',
CPF:10,
NOME:'Robson',
IDADE:45,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PMN'});
db.LE08CANDIDATO.insert({
NROCAND:11,
TIPO:'politico',
CPF:11,
NOME:'Carlos',
IDADE:76,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PRP'});
db.LE08CANDIDATO.insert({
NROCAND:12,
TIPO:'politico',
CPF:12,
NOME:'Jaqueline',
IDADE:39,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PPS'});
db.LE08CANDIDATO.insert({
NROCAND:13,
TIPO:'politico',
CPF:13,
NOME:'Mirela',
IDADE:40,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PV'});
db.LE08CANDIDATO.insert({
NROCAND:14,
TIPO:'politico',
CPF:14,
NOME:'Anderson',
IDADE:44,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PTdoB'});
db.LE08CANDIDATO.insert({
NROCAND:15,
TIPO:'politico',
CPF:15,
NOME:'Michelle',
IDADE:60,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PP'});
db.LE08CANDIDATO.insert({
NROCAND:16,
TIPO:'politico',
CPF:16,
NOME:'Kaleem',
IDADE:62,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSTU'});
db.LE08CANDIDATO.insert({
NROCAND:17,
TIPO:'politico',
CPF:17,
NOME:'Filipe',
IDADE:37,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PCB'});
db.LE08CANDIDATO.insert({
NROCAND:18,
TIPO:'politico',
CPF:18,
NOME:'Jonathan',
IDADE:38,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PRTB'});
db.LE08CANDIDATO.insert({
NROCAND:19,
TIPO:'politico',
CPF:19,
NOME:'Alceu',
IDADE:44,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PHS'});
db.LE08CANDIDATO.insert({
NROCAND:20,
TIPO:'politico',
CPF:20,
NOME:'Jany',
IDADE:48,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSDC'});
db.LE08CANDIDATO.insert({
NROCAND:21,
TIPO:'politico',
CPF:21,
NOME:'Flavia',
IDADE:52,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PCO'});
db.LE08CANDIDATO.insert({
NROCAND:22,
TIPO:'politico',
CPF:22,
NOME:'Ana',
IDADE:55,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PTN'});
db.LE08CANDIDATO.insert({
NROCAND:23,
TIPO:'politico',
CPF:23,
NOME:'Julio',
IDADE:62,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSL'});
db.LE08CANDIDATO.insert({
NROCAND:24,
TIPO:'politico',
CPF:24,
NOME:'Garcia',
IDADE:61,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PRB'});
db.LE08CANDIDATO.insert({
NROCAND:25,
TIPO:'politico',
CPF:25,
NOME:'Joao',
IDADE:60,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSOL'});
db.LE08CANDIDATO.insert({
NROCAND:26,
TIPO:'politico',
CPF:26,
NOME:'Francisco',
IDADE:44,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PR'});
db.LE08CANDIDATO.insert({
NROCAND:27,
TIPO:'politico',
CPF:27,
NOME:'Luis',
IDADE:45,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSD'});
db.LE08CANDIDATO.insert({
NROCAND:28,
TIPO:'politico',
CPF:28,
NOME:'Lucas',
IDADE:47,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PPL'});
db.LE08CANDIDATO.insert({
NROCAND:29,
TIPO:'politico',
CPF:29,
NOME:'Christian',
IDADE:56,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PEN'});
db.LE08CANDIDATO.insert({
NROCAND:30,
TIPO:'politico',
CPF:30,
NOME:'Marcus',
IDADE:55,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PROS'});
db.LE08CANDIDATO.insert({
NROCAND:31,
TIPO:'politico',
CPF:31,
NOME:'Sergio',
IDADE:58,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'SD'});
db.LE08CANDIDATO.insert({
NROCAND:32,
TIPO:'politico',
CPF:32,
NOME:'Paulo',
IDADE:50,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'NOVO'});
db.LE08CANDIDATO.insert({
NROCAND:33,
TIPO:'politico',
CPF:33,
NOME:'Diego',
IDADE:81,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'REDE'});
db.LE08CANDIDATO.insert({
NROCAND:34,
TIPO:'politico',
CPF:34,
NOME:'Guilherme',
IDADE:40,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PMB'});
db.LE08CANDIDATO.insert({
NROCAND:35,
TIPO:'politico',
CPF:35,
NOME:'Andre',
IDADE:44,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSDB'});
db.LE08CANDIDATO.insert({
NROCAND:36,
TIPO:'politico',
CPF:36,
NOME:'Rodrigo Garcia',
IDADE:48,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PT'});
db.LE08CANDIDATO.insert({
NROCAND:37,
TIPO:'politico',
CPF:37,
NOME:'Fernando Haddad',
IDADE:59,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSTU'});
db.LE08CANDIDATO.insert({
NROCAND:38,
TIPO:'politico',
CPF:38,
NOME:'Flavia Rosa',
IDADE:37,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSTU'});
db.LE08CANDIDATO.insert({
NROCAND:39,
TIPO:'politico',
CPF:39,
NOME:'Altino',
IDADE:55,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PDT'});
db.LE08CANDIDATO.insert({
NROCAND:40,
TIPO:'politico',
CPF:40,
NOME:'Elvis Cezar',
IDADE:46,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'UNIAO'});
db.LE08CANDIDATO.insert({
NROCAND:41,
TIPO:'politico',
CPF:41,
NOME:'Eugenio Carlos',
IDADE:46,
APELIDO:'Geninho',
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PSB'});
db.LE08CANDIDATO.insert({
NROCAND:42,
TIPO:'politico',
CPF:42,
NOME:'Lucia França',
IDADE:60,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PDT'});
db.LE08CANDIDATO.insert({
NROCAND:43,
TIPO:'politico',
CPF:43,
NOME:'Gleides Sobre',
IDADE:48,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

var0 = db.LE07PARTIDO.findOne({SIGLA: 'PT'});
db.LE08CANDIDATO.insert({
NROCAND:555,
TIPO:'politico',
CPF:555,
NOME:'Matheus',
IDADE:26,
APELIDO:null,
SIGLAPARTIDO:[var0]
});

db.LE08CANDIDATO.ensureIndex({NROCAND:1});
