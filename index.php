<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="pragma" content="no-cache">
		<meta name="theme-color" content="#FAF911">

		<title>Metalldesign POCK</title>
	
		<!-- swipebox (Warning, Swipebox.js won't work with jquery 3) -->
		<!-- https://github.com/brutaldesign/swipebox -->
		<script src="bower_components/swipebox/lib/jquery-2.1.0.min.js" type="text/javascript"></script>
		<script src="bower_components/swipebox/src/js/jquery.swipebox.min.js" type="text/javascript"></script>
		<link href="bower_components/swipebox/src/css/swipebox.min.css" rel="stylesheet"/>

		<!-- vue.js -->
		<!-- https://vuejs.org/ -->
		<script src="bower_components/vue/dist/vue.min.js" type="text/javascript"></script>

		<!-- fatnav -->
		<!-- http://glitchbone.github.io/jquery-fatNav/ -->
		<script src="bower_components/jquery-fatNav/dist/jquery.fatNav.min.js" type="text/javascript"></script>
		<link href="bower_components/jquery-fatNav/dist/jquery.fatNav.min.css" rel="stylesheet"/>		

		<!-- fullpage -->
		<!-- https://alvarotrigo.com/fullPage/ -->
		<script src="bower_components/fullpage.js/dist/jquery.fullpage.min.js" type="text/javascript"></script>
		<link href="bower_components/fullpage.js/dist/jquery.fullpage.min.css" rel="stylesheet"/>

		<!-- fontawesome embed -->
		<!-- http://fontawesome.io/ -->
		<script src="https://use.fontawesome.com/877ad47a09.js"></script>

		<!-- raleway font -->
		<!-- https://fonts.google.com/specimen/Raleway -->
		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>

		<!-- my styles -->
		<link href="css/global.css" rel="stylesheet"/>
		<link href="css/fatnav.css" rel="stylesheet"/>
		<link href="css/start.css" rel="stylesheet"/>
		<link href="css/me.css" rel="stylesheet"/>

    </head>
	<body>
		<div id="app">
			<div class="fat-nav">
				<div class="fat-nav__wrapper">
					<ul>
						<li v-for="item in navigation">
							<a v-if="!item.split" v-bind:href="'#'+item.menu" v-on:click="menu=item.menu;">{{item.title}}</a>
							<div v-if="item.split" style="display:block;height:1px;background-color:yellow"></div>
						</li>
					</ul>
				</div>
			</div>

			<div id="bar" v-if="menu!='start'"><img src="img/logo.png"/></div>

			<div id="start" v-bind:style="menu != 'start' ? 'display:none' : ''">
				<a v-for="(slide,index) in slides" class="section" v-bind:style="'background-image:url('+slide.bg+');'" v-bind:href="'#'+slide.menu">
					<div v-bind:class="'slide_content '+index!=0?'card':''" class="slide_content" v-bind:style="slide.contentStyle">
						<div v-if="slide.img" class="imgcontainer"><img v-bind:src="slide.img" v-bind:style="slide.imgStyle"/></div>
						<div v-if="slide.title" class="title" v-html="slide.title"></div>
						<div class="arrow bounce" v-if="index==0" v-on:click="nextPage();">
							<i class="fa fa-angle-down fa-2x"></i>
						</div>
					</div>
				</a>
			</div>

			<!-- ------------------------------- ÜBER MICH ------------------------------- -->
			<div id="me" class="content" v-bind:style="menu != 'uebermich' ? 'display:none' : ''">
				<div>
					<div class="card">
						<div class="header bordered"><h20>{{me.header}}</h20></div>
						<div class="birthday">{{me.birthday}}</div>

						<a rel="gal-me" v-bind:href="me.img.src" class="swipebox" v-bind:title="me.img.title">
							<img v-bind:src="me.img.thumb" alt="image"/>
						</a>
						
						<h21 class="subheader">{{me.jobheader}}</h21>

						<table>
							<tr v-for="job in me.jobs">
								<td>{{job.timespan}}</td>
								<td>{{job.title}}</td>
							</tr>
						</table>

						<h21 class="subheader">{{me.contactheader}}</h21>
						<ul class="fa-ul">
							<li><i class="fa-li fa fa-map-marker"></i>{{me.contact.adress}}</li>
							<li><i class="fa-li fa fa-phone"></i>{{me.contact.phone}}</li>
							<li><i class="fa-li fa fa-envelope-o"></i>{{me.contact.email}}</li>
						</ul>

					</div>
				</div>
			</div>

			<!-- ------------------------------- Projects ------------------------------- -->
			<div v-for="project in projects" class="content" v-bind:style="menu != project.id ? 'display:none' : ''">
				<div>
					<div class="card">
						<h20>{{project.title}}</h20>
						<br><br>
						<div v-for="section in project.sections" class="section">
							<h21 v-if="section.title">{{section.title}}</h21>
							<br v-if="section.title"/>
							<div class="description" v-html="section.description"></div>

							<div class="gallery">
								<a v-for="(title,index) in section.gallery.titles" v-bind:rel="'gal-'+section.id" v-bind:href="section.gallery.path + '/' + (index+1) + '.jpg'" v-bind:title="title" class="swipebox">
									<div v-bind:style="'background-image:url('+section.gallery.path + '/' + (index+1) + '.jpg'+');'"></div>
								</a>
							</div>

						</div>


					</div>
				</div>
			</div>

		</div>
    </body>
	<script src="app.js" type="text/javascript"></script>
</html>