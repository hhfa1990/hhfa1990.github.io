$(document).on("ready",function(){

	var data = {
		nuevoLaredo: {
			nombre: "Nuevo Laredo",
			habitantes: "384,033",
			viviendas: "101,841",
			viasCom: "..."
		},
		guerrero: {
			nombre: "Guerrero",
			habitantes: "4,447",
			viviendas: "1,308",
			viasCom: "..."
		},
		mier: {
			nombre: "Mier",
			habitantes: "4,762",
			viviendas: "1,442",
			viasCom: "..."
		},
		miguelAleman: {
			nombre: "Miguel Aleman",
			habitantes: "27,015",
			viviendas: "7,423",
			viasCom: "Cuenta con un puente internacional, que conecta con el ferrocarril norteamericano, facilitando la actividad exportadora e importadora de esta entidad del país."
		},
		camargo: {
			nombre: "Camargo",
			habitantes: "14,933",
			viviendas: "4,405",
			viasCom: "Carretera federal Núm. 2 y la estatal Camargo-Comales, incluyendo Peña Blanca."
		},
		diazOrdaz: {
			nombre: "Diaz Ordaz",
			habitantes: "15,775",
			viviendas: "4,593",
			viasCom: "Cuenta principalmente con una carretera que lo cruza de oriente a poniente, sirviendo no solo a la Cabecera Municipal, sino a otras comunidades; esta región es cubierta por la carretera Matamoros-Monterrey."
		},
		reynosa: {
			nombre: "Reynosa",
			habitantes: "608,891",
			viviendas: "170,171",
			viasCom: "Cuenta con tres puentes internacionales, mismos que cruzan el río Bravo y llegan a Mission (Texas), Pharr (Texas) e Hidalgo (Texas)."
		},
		rioBravo: {
			nombre: "Rio Bravo",
			habitantes: "118,259",
			viviendas: "31,371",
			viasCom: "Puente Internacional Rio Bravo-Donna"
		},
		valleHermoso: {
			nombre: "Valle Hermoso",
			habitantes: "63,170",
			viviendas: "17,275",
			viasCom: "..."
		},
		matamoros: {
			nombre: "Matamoros",
			habitantes: "489,193",
			viviendas: "133,116",
			viasCom: "Puente Viejo (MEX) – B&M Bridge, Puente Nuevo (MEX) – Gateway Bridge (USA), Puente Ignacio Zaragoza (MEX) – Veterans International Bridge (USA), Puente Libre Comercio – Los Indios (USA) y Aeropuerto Internacional General Servando Canales o Aeropuerto Internacional de Matamoros."
		}
	};

	var info = {
		hidrografia: {
			nombre: "Hidrografía",
			icon: "g",
			desc: "Pertenecen a la cuenca hidrológica del Río Bravo, cuenca del Rio Álamo, irrigado por obras de infraestructura como son los canales, Culebras, Anzaldúas y Rodhe. presa Marte R. Gómez, base del sistema de riego del bajo río San Juan o Distrito de Riego Núm. 25."
		},
		orografia: {
			nombre: "Orografía",
			icon: "p",
			desc: "Constituido, fundamentalmente, por llanuras, orografía plana lo que permite sistemas de riego, semiplana con suaves pendientes en dirección oeste a este, El nivel del suelo es ligeramente plano con inclinación hacia el este, siguiendo el cauce del Río Bravo. Planicie con pocas irregularidades y ligera pendiente hacia el sureste."
		},
		clima: {
			nombre: "Clima, temperatura(s) predominante(s) y régimen promedio de precipitación pluvial.",
			icon: "s",
			desc: "Su clima es cálido y seco, aunque frecuentemente se presentan fenómenos ciclónicos y la temperatura desciende a bajos niveles en el invierno."
		},
		flora: {
			nombre: "Flora",
			icon: "x",
			desc: "La flora contiene matorrales espinosos, bosques bajos predominando los chaparros espinosos y árboles temporaleros, tierra de pastizales y arbustos, vegetación semiárida, bosque mediano. Matorral subinerme, pastos forrajeros, cactus."
		},
		fauna: {
			nombre: "Fauna",
			icon: "b",
			desc: "Paloma de ala blanca, que es migratoria, y bandadas de pajarillos silvestres; así como el coyote, tejón mapache, tlacuache, ruta de la mariposa monarca, gansos patos, venados cola blanca, jabalí, conejo, liebre, gato rabón, armadillo."
		},
		salud: {
			nombre: "Salud",
			icon: "@",
			desc: "<p>Los servicios de salud están a cargo de la Secretaría de Salud (SSA), del Instituto Mexicano del Seguro Social (IMSS) y del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (ISSSTE), así como consultorios particulares y la Cruz Roja.</p><p>La Secretaría de Salud dispone de clínicas hospital y Centros de Salud, distribuidos en los principales núcleos de población; el IMSS cuenta con la unidad médica familiar y el ISSSTE, clínicas periféricas.</p><p>Cuenta con médicos de las sig. Áreas: Cardiología, otorrinolaringólogo, gastroenterólogo, internistas, cirujanos, urólogo, pediatras, dermatólogos ansiologos, ginecólogos, etc. También cuenta con dentistas, hospitales, laboratorios, farmacias, spa, ópticas.</p>"
		},
		educacion: {
			nombre: "Educación",
			icon: "u",
			desc: "<p>Cuenta con infraestructura educativa en los niveles de preescolar, primaria, medio básico, medio superior y terminal.</p><p>El Gob. Está invirtiendo millones de pesos en infraestructura educativa para fortalecerla ya que cuenta con pocas instituciones educativas y muchos alumnos no pueden acudir a la escuela.</p><p>La educación básica de primaria es atendida por la Federación y el Estado. La preparatoria está incorporada a la Universidad Autónoma de Tamaulipas (UAT).</p> <strong>Universidades</strong> <ul><li>Instituto Tecnológico de Reynosa</li><li>Universidad Tecnológica de Tamaulipas Norte (UTTN)</li><li>Universidad Pedagógica Nacional (UPN)</li><li>Universidad Autónoma de Tamaulipas (UAT)</li><li>Unidad Académica Multidisciplinaria Reynosa-Rodhe</li><li>Unidad Académica Multidisciplinaria Reynosa-Aztlán</li><li>Universidad Americana del Noreste (UANE)</li><li>Universidad del Valle de México (UVM)</li><li>Universidad Tec Milenio</li><li>Universidad Interamericana del Norte (UIN)</li><li>Universidad Interamericana para el Desarrollo (UNID)</li><li>Universidad México-Americana del Norte (UMAN)</li><li>Universidad Miguel Alemán (UMA)</li><li>Universidad Tamaulipeca (UT)</li></ul>"
		},
		activEcon: {
			nombre: "xxx",
			icon: "t",
			desc: ""
		}
	}

	$("#Map area").hover(function(){
		var municipio = $(this).attr("id");

		$("#municipio h2").text(data[municipio].nombre);
		$("#noHab").text(data[municipio].habitantes);
		$("#noViv").text(data[municipio].viviendas);
		$("#viasCom").text(data[municipio].viasCom);
	});

	$("#info span").click(function(){
		$("ul#moreInfo + div").removeClass("open");

		$("#info").toggleClass("open");
	});

	$("#moreInfo li").click(function(){
		var val = $(this).attr("id");

		$("ul#moreInfo + div h3").html('<span class="icon">'+info[val].icon+'</span> '+info[val].nombre);
		$("ul#moreInfo + div .desc").html(info[val].desc);

		$("#info").removeClass("open");
		$("ul#moreInfo + div").addClass("open");
	});

	$("ul#moreInfo + div .close").click(function(){
		$("ul#moreInfo + div").removeClass("open");
	});

});