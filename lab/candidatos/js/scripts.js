$(document).ready(function(){

	function getSize(){
		$("div#candidatos > ul > li").attr("style", "");
  		var width = $("div#candidatos > ul > li:first-child").width(); 
  		$("div#candidatos > ul > li").css("height", width);
	}
	 
	getSize();
	window.onresize = function(){getSize();};

	// MENSAJE PARA MOSTRAR SI NO SE CUENTA CON INFORMACION
	var sinInfo = "<p>Sin información</p><p>Se necesita un poco de tu <strong>Ki</strong> \\o/, por favor colabora <a href='https://docs.google.com/document/d/1XONLZYuxv8I5n8bDeVbyUA2zeukzktG77WJURljjWAM/edit' target='_blank'>aquí</a></p>";

	//INFORMACION DE LOS CANDIDATOS
	var candidatos = {
		// XXX:{ //EJEMPLO
		// 	nombre: "XXX", //TEXTO PLANO
		// 	infoPersonal: "datos HTML",
		// 	propuestas: "datos HTML",
		// 	antecedentes: "datos HTML",
		// 	fuentes: "datos HTML"
		// },
		pan: {
			nombre: "ISMAEL GARCIA CABEZA DE VACA",
			infoPersonal: "<p><strong>Estudios:</strong>Licenciado en Comercio Exterior por la Universidad Panamericana de Edimburgo</p><p><strong>Negocios:</strong>Conoce lo que es la maquiladora, la empresa, el comercio y los negocios aduanales.</p><p><strong>3DE3: </strong>No (exige que lo haga!)</p><p><strong>Twitter: </strong><a href='https://twitter.com/IGCabezadeVaca' target='_blank'>@IGCabezadeVaca</a></p><p><strong>Facebook: </strong><a href='https://www.facebook.com/IsmaelCabezadeVaca'>fb/IsmaelCabezadeVaca</a></p>",
			propuestas: "<p>Reducir el IVA, dar apoyo a las madres de familia y mejorar su economía. Propuso un reparto parejo de despensas, y se comprometió a incrementar el número de becas para ayudar a la economía de las familias y que sus hijos tengan la oportunidad de estudiar.</p>",
			antecedentes: "<p>Su hermano (Francisco Javier García Cabeza de Vaca, ahora senador y antes alcalde de Reynosa) es acusado de nexos con la delincuencia organizada. Familiares y colaboradores han sido arrestados o asesinados debido a estos presuntos vínculos.</p><p>Su madre y el serán acusados formalmente en los Estados Unidos de cargos criminales federales por los graves delitos de Lavado de dinero, Fraude Bancario, Fraude Fiscal, Perjurio, Fraude Electrónico y Fraude postal.</p>",
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li><li><a href='http://www.pan.tam.org.mx/' target='_blank'>http://www.pan.tam.org.mx/</a></li><li><a href='http://www.metronoticias.com.mx/nota.cgi?id=286734' target='_blank'>http://www.metronoticias.com.mx/nota.cgi?id=286734</a></li><li><a href='http://www.sdpnoticias.com/local/tamaulipas/2015/04/22/acusan-de-nexos-con-el-cartel-del-golfo-a-senador-panista-garcia-cabeza-de-vaca' target='_blank'>http://www.sdpnoticias.com/local/tamaulipas/2015/04/22/acusan-de-nexos-con-el-cartel-del-golfo-a-senador-panista-garcia-cabeza-de-vaca</a></li><li><a href='http://columnatamaulipas.com/ismael-garcia-cabeza-de-vaca-y-su-madre-enfrentan-cargos-criminales-en-los-estados-unidos/' target='_blank'>http://columnatamaulipas.com/ismael-garcia-cabeza-de-vaca-y-su-madre-enfrentan-cargos-criminales-en-los-estados-unidos/</a></li><li><a href='http://www.redpolitica.mx/elecciones-2015/asi-vivieron-candidatos-balaceras-en-reynosa' target='_blank'>http://www.redpolitica.mx/elecciones-2015/asi-vivieron-candidatos-balaceras-en-reynosa</a></li></ul>"
		},
		pri: {
			nombre: "MARIA ESTHER GUADALUPE CAMARGO DE LUEBBERT",
			infoPersonal: "<p><strong>Estudios: </strong>Licenciatura en ciencias de la educación, maestría en investigación y desarrollo de la educación.</p><p><strong>3DE3: </strong>No (exige que lo haga!)</p><p><strong>Twitter: </strong><a href='https://twitter.com/MariaEstherRey' target='_blank'>@MariaEstherRey</a></p><p><strong>Facebook: </strong><a href='https://www.facebook.com/mariaesther.camargo' target='_blank'>fb/mariaesther.camargo</a></p>",
			propuestas: "<p><strong>Seguridad para las familias: </strong>plan frontera noreste de cohesión social, fortalecimiento en la prevención y atención de delitos, participación social en el combate de la inseguridad, sociedad segura y de leyes.</p><p><strong>Educación: </strong>educación integral para competir y prosperar, fortalecer la educación inicial y básica, educación media superior, educación superior, educación virtual y a distancia</p><p><strong>Polítoca social: </strong>madres de Familia, grupos vulnerables, jóvenes, arte y cultura</p><p><strong>Competitividad, productividad y empleo: </strong>infraestructura regional para empresas competitivas, mayor impulso a la pequeña y mediana empresa, uso de las Tecnologías (TIC´s)</p><p><strong>Buen gobierno: </strong>mayor transparencia y rendición de cuentas, participación ciudadana, federalismo, colaboración entre poderes, administración pública eficaz, menos plurinominales</p>",
			antecedentes: "<p>Esposa de Oscar Luebbert Gutierrez (Ex senador, ex diputado federal y ex alcalde en dos ocasiones de la ciudad de Reynosa.)</p><p>Denunciada ante la FEPADE por supuestos actos de campaña adelantados (aun era pre-candidata) en los eventos del 266 aniversario de la fundación de Reynosa.</p>",
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073 ' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073 </a></li><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li><li><a href='http://mariaesthercamargo.mx/' target='_blank'>http://mariaesthercamargo.mx/</a></li><li><a href='http://www.latarde.com.mx/index.php?option=com_content&view=article&id=22748:acapara-precandidata-del-pri-eventos-de-las-fiestas-de-la-ciudad&catid=44:reynosa&Itemid=114 ' target='_blank'>http://www.enlineadirecta.info/?option=view&article=260009 </a></li><li><a href='http://laprensa.mx/notas.asp?id=219162' target='_blank'>http://laprensa.mx/notas.asp?id=219162</a></li></ul>"
		},
		prd: {				
			nombre: "CRISTELA AGUILLON DE LEON",
			infoPersonal: "<p><strong>Estudios: </strong>Cursó la escuela pública concluyendo sus estudios en la Preparatoria abierta del INEA. Esforzándose ya casada, realizó estudios en la carrera de Odontología, siendo su pasión el auxilio de sus semejantes, llevándolo a cabo en enfermería, trabajo en laboratorio, así como paramédico en la Cruz Roja, Protección Civil, y otras instituciones médicas.</p><p><strong>3DE3: </strong> No (exige que lo haga!)</p><p><strong>Facebook: </strong><a href='https://www.facebook.com/cristela.aguillon.portiyparatiprd'>fb/cristela.aguillon.portiyparatiprd</a></p>",
			propuestas: "<p>Recuperar la paz y la tranquilidad en la ciudad. No permitir la privatización  del agua y garantizar el acceso al agua potable con tarifas justas. Disminuir el factor de descuento a los créditos de INFONAVIT. Más y mejores escuelas públicas en Reynosa. No votaremos para aumentar impuestos al pueblo, si no al contrario, buscaremos que se mejore la economía familiar. Seré incansable gestora en materia de salud, gestionaré las más amplias partidas presupuestales para las instituciones de salud en nuestro municipio. Exigiremos transparencia en el manejo de los recursos públicos y propondremos sanciones severas a los funcionarios que utilicen los recursos públicos y programas sociales para su beneficio personal. </p>",
			antecedentes: "<p>Participó como seccional del PRI del año 2007 al 2009 en la Colonia Cumbres</p><p>Desde al año 2014 inició una lucha legal en la defensa de los derechos humanos de su hijo menor de edad, Adonis Emmanuel Segura Aguillón, quien fue expulsado por el Director del CETIS 71 por cobrar derechos de piso a sus compañeros.</p>",
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li><li><a href='http://www.prdtamaulipas.org.mx/' target='_blank'>http://www.prdtamaulipas.org.mx/</a></li><li><a href='http://www.chilanguerias.com/expulsan-estudiante-por-cobrar-derecho-de-piso-sus-companeritos/' target='_blank'>http://www.chilanguerias.com/expulsan-estudiante-por-cobrar-derecho-de-piso-sus-companeritos/</a></li></ul>"
		},
		pt: {				
			nombre: "EMILIO MINCHACA GARIN",
			infoPersonal: "<p><strong>Estudios: </strong>sin información</p><p><strong>Trabajo: </strong>abogado</p><p><strong>3DE3: </strong>No (exige que lo haga!)</p><p><strong>Facebook: </strong><a href='https://www.facebook.com/pages/Emilio-Minchaca-Garin/340497959489827' target='_blank'>https://www.facebook.com/pages/Emilio-Minchaca-Garin/340497959489827</a></p>",
			propuestas: "<p>Reducir el salario de los diputados y senadores. así como demás funcionarios y servidores públicos. Aumentar el salario mínimo con una propuesta económica real. Eliminar el fuero. Derechos sociales a policías para la seguridad. Aplicación de penas mas severas en delitos. </p>",
			antecedentes: sinInfo,
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li><li><a href='http://www.partidodeltrabajo.org.mx/2011/index.php ' target='_blank'>http://www.partidodeltrabajo.org.mx/2011/index.php </a></li></ul>"
		},
		verde: {
			nombre: "MARIA TERESA CORRAL GARZA",
			infoPersonal: "<p><strong>Estudios: </strong>Cirujano Dentista. Egresada de Universidad Autónoma de Nuevo Leon (Facultad de odontología).</p><p><strong>Negocios: </strong>Consultorio Dental en Aldama, Nuevo Leon y Reynosa, Auto Express La candelaria (administradora).</p><p><strong>Trabajo: </strong>Diputada por el Partido Acción Nacional en la LXII Legislatura - Representación Proporcional / Plurinominal. (Legislatura que sigue vigente hasta el 31 de Agosto 2015).</p><p><strong>3DE3: </strong>No (exige que lo haga!)</p>",
			propuestas: sinInfo,
			antecedentes: "<p><strong>PAN: </strong>Candidata a novena Regiduría, Coordinadora de Relaciones Públicas en Candidatura a Diputaciones Federales. Coordinadora de eventos en candidatura a presidencias municipales.</p><p><strong>Dama Voluntaria: </strong>Estancia Amigos Especiales de Vicente de Paúl, Ciudad Reynosa Tamaulipas. Organicé en la fundación, un evento que por primera vez los niños y sus familiares salieran de los centros para convivir en familia juntando la comunidad de Días Ordaz y Reynosa. Fundación de ayuda humanitaria desempeñando el cargo de coordinación de voluntariado y eventos especiales. Ciudad Reynosa Tamaulipas.</p>",
			fuentes: "<ul><li><a href='http://www.congresotamaulipas.gob.mx/AsambleaLegislativa/Diputados/Legislador.asp?IdDiputado=758' target='_blank'>http://www.congresotamaulipas.gob.mx/AsambleaLegislativa/Diputados/Legislador.asp?IdDiputado=758</a></li><li><a href='http://es.wikipedia.org/wiki/LXII_Legislatura_del_Congreso_de_la_Uni%C3%B3n_de_M%C3%A9xico#Diputados_por_distrito_uninominal_.28mayor.C3.ADa_relativa.29' target='_blank'>http://es.wikipedia.org/wiki/LXII_Legislatura_del_Congreso_de_la_Uni%C3%B3n_de_M%C3%A9xico#Diputados_por_distrito_uninominal_.28mayor.C3.ADa_relativa.29</a></li><li><a href='http://www.congresotamaulipas.gob.mx/Parlamentario/Archivos/Diputados/Curriculum/curriculum_dip_maria_teresa_corral_garza_.pdf' target='_blank'>http://www.congresotamaulipas.gob.mx/Parlamentario/Archivos/Diputados/Curriculum/curriculum_dip_maria_teresa_corral_garza_.pdf</a></li></ul>"
		},
		movCiud: {
			nombre: "EVA ARACELI REYES GONZALEZ",
			infoPersonal: "<p><strong>Estudios: </strong>Egresada del Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) de la Carrera Profesional de Ciencias de la Comunicación.Becada por el Instituto Interamericano de Derechos Humanos en Costa Rica. Becada por el Banco Mundial y el Instituto Tecnológico de Estudios Superiores de Monterrey para el desarrollo sustentable y temas de seguridad.</p><p><strong>3DE3: </strong>No (exige que lo haga!)</p><p><strong>Facebook: </strong><a href='https://www.facebook.com/evareyes9' target='_blank'>fb/evareyes9</a></p>",
			propuestas: sinInfo,
			antecedentes: "<p>Ha sido representante del Ejercito Zapatista de Liberación Nacional (EZL) en la comunidad de Tamaulipas, ha estado en la Organización de las Naciones Unidas (ONU) en Ginebra Suiza, ha estado becada por el Instituto Interamericano de Derechos Humanos en Costa Rica, ha sido becada por el Banco Mundial y el Instituto Tecnológico de Estudios Superiores de Monterrey para el desarrollo sustentable y temas de seguridad.</p><p>Ha sido invitada a participar en dos administraciones municipales de la ciudad de Reynosa; la primera vez en el área de Relaciones Públicas con el entonces alcalde Ramón Pérez García (1990-1992); La segunda vez participó activamente en el área de Seguridad Pública con el entonces presidente municipal Francisco Javier García Cabeza de Vaca, periodo 2005-2007.</p>",
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li><li><a href='http://3culturas.info/no-nos-pueden-robar-mas-eva-reyes/' target='_blank'>http://3culturas.info/no-nos-pueden-robar-mas-eva-reyes/</a></li></ul>"
		},
		nuevAli: {
			nombre: "JORGE GUADALUPE ACUÑA TOVIAS",
			infoPersonal: "<p><strong>Estudios: </strong>egresado de la escuela normal rural de San José de las Flores del municipio de Guemez.</p><p><strong>Trabajo: </strong>profesor</p><p><strong>3DE3: </strong>No (exige que lo haga!)</p>",
			propuestas: sinInfo,
			antecedentes: sinInfo,
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li><li><a href='http://www.contextodetamaulipas.info/contenido/?p=101201' target='_blank'>http://www.contextodetamaulipas.info/contenido/?p=101201</a></li></ul>"
		},
		morena: {
			nombre: "SILVIA LEONOR VALENCIA CRUZ",
			infoPersonal: "<p><strong>Estudios: </strong>sin información</p><p><strong>Trabajo: </strong>Secretaria ejecutiva en un hospital privado.</p><p><strong>3DE3: </strong>No (exige que lo haga!)</p><p><strong>Teléfono:</strong> 922 08 37</p>",
			propuestas: "<p>Rechazar las formas de gobernar del actual régimen autoritario y corrupto.</p><p>Participo con propósito es abolir el régimen de corrupción imperante que ha secuestrado a las Instituciones públicas.</p><p>Derogar la reforma laboral, porque perjudica a los obreros; la educativa, que va contra la Educación Gratuitas y los maestros; la fiscal, que afecta a los pequeños empresarios y hasta a los consumidores, y la energética, pues con ella se pretende saquear los bienes de la nación.</p><p>Nos comprometemos en la medida de nuestras facultades recuperar en esencia el contenido de la Constitución de 1917, violentada por reformistas entreguistas a intereses extranjeros.</p><p>Asumo el compromiso de trabajar por el bien de todos los Reynosenses, sobre todo por los que menos tienen.</p>",
			antecedentes: sinInfo,
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li><li><a href='http://www.lanuevarepublica.org/2015/04/11/candidatosmorena-diputada-reynosa-silvia-leonor-valencia-cruz-redes_morena/' target='_blank'>http://www.lanuevarepublica.org/2015/04/11/candidatosmorena-diputada-reynosa-silvia-leonor-valencia-cruz-redes_morena/</a></li><li><a href='http://3culturas.info/silvia-leonor-valencia-cruz-encabeza-la-formula-del-partido-morena-para-candidata-a-diputado-federal-por-reynosa/' target='_blank'>http://3culturas.info/silvia-leonor-valencia-cruz-encabeza-la-formula-del-partido-morena-para-candidata-a-diputado-federal-por-reynosa/</a></li></ul>"
		},
		humanista: {
			nombre: "ALETZE ROSELVY NIÑO JIMENEZ",
			infoPersonal: "<p><strong>Estudios: </strong>sin información</p><p><strong>Trabajo: </strong>maestra</p><p><strong>3DE3: </strong> No (exige que lo haga!)</p>",
			propuestas: sinInfo,
			antecedentes: sinInfo,
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li></ul>"
		},
		encSocial: {
			nombre: "NIDIA YVONNE MUÑIZ BALLEZA",
			infoPersonal: "<p><strong>Estudios: </strong>sin información</p><p><strong>Trabajo: </strong>sin información</p><p><strong>3DE3: </strong> No (exige que lo haga!)</p>",
			propuestas: sinInfo,
			antecedentes: sinInfo,
			fuentes: "<ul><li><a href='http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073' target='_blank'>http://www.ine.mx/portal/Elecciones/Proceso_Electoral_Federal_2014-2015/CandidatasyCandidatos/resultado.html#!/tipoDiputado/1/partido/0/entidad/28/seccion/1073</a></li></ul>"
		}
	};


	$("div#candidatos > ul > li").click(function(){

		if(!$(this).hasClass("active")){
			$("#welcome").fadeOut(500);

			var id = $(this).attr("id");

			$("div#candidatos > ul > li").removeClass("active");
			$(this).addClass("active");

			$("div#info").removeClass("visible");

			setTimeout(function(){
				$("h1").addClass("select").html(candidatos[id].nombre);
				$("#candidato > div").html(candidatos[id].infoPersonal);
				$("#propuestas > div").html(candidatos[id].propuestas);
				$("#antecedentes > div").html(candidatos[id].antecedentes);
				$("#fuentes > div").html(candidatos[id].fuentes);

				$("div#info").addClass("visible");
			}, 500);

		}
			
	});


});

