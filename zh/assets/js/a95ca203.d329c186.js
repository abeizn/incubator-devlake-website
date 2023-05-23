"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[60334],{88474:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var l=a(87462),n=(a(67294),a(3905));a(61839);const r={title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:2},i=void 0,p={unversionedId:"GettingStarted/HelmSetup",id:"GettingStarted/HelmSetup",title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",source:"@site/docs/GettingStarted/HelmSetup.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/HelmSetup",permalink:"/zh/docs/next/GettingStarted/HelmSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/HelmSetup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install via Helm",description:"The steps to install Apache DevLake via Helm for Kubernetes\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Install via Docker Compose",permalink:"/zh/docs/next/GettingStarted/DockerComposeSetup"},next:{title:"Upgrade",permalink:"/zh/docs/next/GettingStarted/Upgrade"}},s={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"You can also check https://github.com/apache/incubator-devlake-helm-chart to make contribution",id:"you-can-also-check-httpsgithubcomapacheincubator-devlake-helm-chart-to-make-contribution",level:4},{value:"Install",id:"install",level:3},{value:"Tips:",id:"tips",level:4},{value:"Update",id:"update",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Some example deployments",id:"some-example-deployments",level:2},{value:"Deploy with NodePort",id:"deploy-with-nodeport",level:3},{value:"Deploy with Ingress",id:"deploy-with-ingress",level:3},{value:"Deploy with Ingress (Https)",id:"deploy-with-ingress-https",level:3},{value:"Parameters",id:"parameters",level:2},{value:"FAQ",id:"faq",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:o};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Helm >= 3.6.0"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes >= 1.19.0")),(0,n.kt)("h2",{id:"quick-start"},"Quick Start"),(0,n.kt)("h4",{id:"you-can-also-check-httpsgithubcomapacheincubator-devlake-helm-chart-to-make-contribution"},"You can also check ",(0,n.kt)("a",{parentName:"h4",href:"https://github.com/apache/incubator-devlake-helm-chart"},"https://github.com/apache/incubator-devlake-helm-chart")," to make contribution"),(0,n.kt)("h3",{id:"install"},"Install"),(0,n.kt)("p",null,"To install the chart with release name ",(0,n.kt)("inlineCode",{parentName:"p"},"devlake"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nhelm install devlake devlake/devlake --version=0.17.0-beta5\n")),(0,n.kt)("p",null,"And visit your devlake from the node port (32001 by default)."),(0,n.kt)("p",null,"http://YOUR-NODE-IP:32001"),(0,n.kt)("h4",{id:"tips"},"Tips:"),(0,n.kt)("p",null,"If you are using minikube inside your mac, please use the following command to forward the port:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/devlake-ui  30090:4000\n")),(0,n.kt)("p",null,"and open another terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward service/devlake-grafana  30091:3000\n")),(0,n.kt)("p",null,"Then you can visit:\nconfig-ui by url ",(0,n.kt)("inlineCode",{parentName:"p"},"http://YOUR-NODE-IP:30090"),"\ngrafana by url ",(0,n.kt)("inlineCode",{parentName:"p"},"http://YOUR-NODE-IP:30091")),(0,n.kt)("h3",{id:"update"},"Update"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm upgrade --install devlake devlake/devlake --version=0.17.0-beta5\n")),(0,n.kt)("h3",{id:"uninstall"},"Uninstall"),(0,n.kt)("p",null,"To uninstall/delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"devlake")," release:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall devlake\n")),(0,n.kt)("h2",{id:"some-example-deployments"},"Some example deployments"),(0,n.kt)("h3",{id:"deploy-with-nodeport"},"Deploy with NodePort"),(0,n.kt)("p",null,"Conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IP Address of Kubernetes node: 192.168.0.6"),(0,n.kt)("li",{parentName:"ul"},"Want to visit devlake with port 30000.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm install devlake devlake/devlake --set service.uiPort=30000\n")),(0,n.kt)("p",null,"After deployed, visit devlake: ",(0,n.kt)("a",{parentName:"p",href:"http://192.168.0.6:30000"},"http://192.168.0.6:30000")),(0,n.kt)("h3",{id:"deploy-with-ingress"},"Deploy with Ingress"),(0,n.kt)("p",null,"Conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I have already configured default ingress for the Kubernetes cluster"),(0,n.kt)("li",{parentName:"ul"},"I want to use ",(0,n.kt)("a",{parentName:"li",href:"http://devlake.example.com"},"http://devlake.example.com")," for visiting devlake")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'helm install devlake devlake/devlake --set "ingress.enabled=true,ingress.hostname=devlake.example.com"\n')),(0,n.kt)("p",null,"After deployed, visit devlake: ",(0,n.kt)("a",{parentName:"p",href:"http://devlake.example.com"},"http://devlake.example.com"),", and grafana at ",(0,n.kt)("a",{parentName:"p",href:"http://devlake.example.com/grafana"},"http://devlake.example.com/grafana")),(0,n.kt)("h3",{id:"deploy-with-ingress-https"},"Deploy with Ingress (Https)"),(0,n.kt)("p",null,"Conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I have already configured ingress(class: nginx) for the Kubernetes cluster, and the https using 8443 port."),(0,n.kt)("li",{parentName:"ul"},"I want to use ",(0,n.kt)("a",{parentName:"li",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443")," for visiting devlake."),(0,n.kt)("li",{parentName:"ul"},"The https certificates are generated by letsencrypt.org, and the certificate and key files: ",(0,n.kt)("inlineCode",{parentName:"li"},"cert.pem")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"key.pem"))),(0,n.kt)("p",null,"First, create the secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl create secret tls ssl-certificate --cert cert.pem --key secret.pem\n")),(0,n.kt)("p",null,"Then, deploy the devlake:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'helm install devlake devlake/devlake \\\n    --set "ingress.enabled=true,ingress.enableHttps=true,ingress.hostname=devlake-0.example.com" \\\n    --set "ingress.className=nginx,ingress.httpsPort=8443" \\\n    --set "ingress.tlsSecretName=ssl-certificate"\n')),(0,n.kt)("p",null,"After deployed, visit devlake: ",(0,n.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443"},"https://devlake-0.example.com:8443"),", and grafana at ",(0,n.kt)("a",{parentName:"p",href:"https://devlake-0.example.com:8443/grafana"},"https://devlake-0.example.com:8443/grafana")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"Some useful parameters for the chart, you could also check them in values.yaml"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"replicaCount"),(0,n.kt)("td",{parentName:"tr",align:null},"Replica Count for devlake, currently not used"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"imageTag"),(0,n.kt)("td",{parentName:"tr",align:null},"The version tag for all images"),(0,n.kt)("td",{parentName:"tr",align:null},"see Values.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.useExternal"),(0,n.kt)("td",{parentName:"tr",align:null},"If use external mysql server, set true"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.externalServer"),(0,n.kt)("td",{parentName:"tr",align:null},"External mysql server address"),(0,n.kt)("td",{parentName:"tr",align:null},"127.0.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.externalPort"),(0,n.kt)("td",{parentName:"tr",align:null},"External mysql server port"),(0,n.kt)("td",{parentName:"tr",align:null},"3306")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.username"),(0,n.kt)("td",{parentName:"tr",align:null},"username for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"merico")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.password"),(0,n.kt)("td",{parentName:"tr",align:null},"password for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"merico")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.database"),(0,n.kt)("td",{parentName:"tr",align:null},"database for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"lake")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.rootPassword"),(0,n.kt)("td",{parentName:"tr",align:null},"root password for mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.storage.class"),(0,n.kt)("td",{parentName:"tr",align:null},"storage class for mysql's volume"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.storage.size"),(0,n.kt)("td",{parentName:"tr",align:null},"volume size for mysql's data"),(0,n.kt)("td",{parentName:"tr",align:null},"5Gi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for mysql's image"),(0,n.kt)("td",{parentName:"tr",align:null},"mysql")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"image tag for mysql's image"),(0,n.kt)("td",{parentName:"tr",align:null},"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for mysql's image"),(0,n.kt)("td",{parentName:"tr",align:null},"IfNotPresent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.extraLabels"),(0,n.kt)("td",{parentName:"tr",align:null},"extra labels for mysql's statefulset"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.securityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"pod security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mysql.containerSecurityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"container security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for grafana's image"),(0,n.kt)("td",{parentName:"tr",align:null},"apache/devlake-dashboard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for grafana's image"),(0,n.kt)("td",{parentName:"tr",align:null},"Always")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.useExternal"),(0,n.kt)("td",{parentName:"tr",align:null},"If use external grafana server"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.externalUrl"),(0,n.kt)("td",{parentName:"tr",align:null},"external grafana server if use external"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.extraLabels"),(0,n.kt)("td",{parentName:"tr",align:null},"extra labels for grafana's statefulset"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.securityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"pod security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.containerSecurityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"container security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.oauthEnabled"),(0,n.kt)("td",{parentName:"tr",align:null},"enable oauth for grafana"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"grafana.oauthConfig"),(0,n.kt)("td",{parentName:"tr",align:null},"a list of env vars used for oauth"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.storage.class"),(0,n.kt)("td",{parentName:"tr",align:null},"storage class for lake's volume"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.storage.size"),(0,n.kt)("td",{parentName:"tr",align:null},"volume size for lake's data"),(0,n.kt)("td",{parentName:"tr",align:null},"100Mi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for lake's image"),(0,n.kt)("td",{parentName:"tr",align:null},"apache/devlake")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for lake's image"),(0,n.kt)("td",{parentName:"tr",align:null},"Always")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.loggingDir"),(0,n.kt)("td",{parentName:"tr",align:null},"log dir for the lake server"),(0,n.kt)("td",{parentName:"tr",align:null},"/app/logs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.loggingLevel"),(0,n.kt)("td",{parentName:"tr",align:null},"log level for the lake server"),(0,n.kt)("td",{parentName:"tr",align:null},"info")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.dotenv"),(0,n.kt)("td",{parentName:"tr",align:null},"initial configurations for injecting to lake's .env"),(0,n.kt)("td",{parentName:"tr",align:null},"see Values.yaml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.extraLabels"),(0,n.kt)("td",{parentName:"tr",align:null},"extra labels for lake's statefulset"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.securityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"pod security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lake.containerSecurityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"container security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.image.repository"),(0,n.kt)("td",{parentName:"tr",align:null},"repository for ui's image"),(0,n.kt)("td",{parentName:"tr",align:null},"apache/devlake-config-ui")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.image.pullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"pullPolicy for ui's image"),(0,n.kt)("td",{parentName:"tr",align:null},"Always")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"If the basic auth in ui is enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.user"),(0,n.kt)("td",{parentName:"tr",align:null},"The user name for the basic auth"),(0,n.kt)("td",{parentName:"tr",align:null},'"admin"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.password"),(0,n.kt)("td",{parentName:"tr",align:null},"The password for the basic auth"),(0,n.kt)("td",{parentName:"tr",align:null},'"admin"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.useSecret"),(0,n.kt)("td",{parentName:"tr",align:null},"If use secret instead of configmap for basic auth"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.autoCreateSecret"),(0,n.kt)("td",{parentName:"tr",align:null},"If let the helm chart create the secret"),(0,n.kt)("td",{parentName:"tr",align:null},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.basicAuth.secretName"),(0,n.kt)("td",{parentName:"tr",align:null},"The basic auth secret name"),(0,n.kt)("td",{parentName:"tr",align:null},"devlake-auth")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.extraLabels"),(0,n.kt)("td",{parentName:"tr",align:null},"extra labels for ui's statefulset"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.securityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"pod security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ui.containerSecurityContext"),(0,n.kt)("td",{parentName:"tr",align:null},"container security context values"),(0,n.kt)("td",{parentName:"tr",align:null},"{}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.type"),(0,n.kt)("td",{parentName:"tr",align:null},"Service type for exposed service"),(0,n.kt)("td",{parentName:"tr",align:null},"NodePort")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.uiPort"),(0,n.kt)("td",{parentName:"tr",align:null},"Node port for config ui"),(0,n.kt)("td",{parentName:"tr",align:null},"32001")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"If enable ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.enableHttps"),(0,n.kt)("td",{parentName:"tr",align:null},"If enable https"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.className"),(0,n.kt)("td",{parentName:"tr",align:null},"Name for ingressClass. leave empty for using default"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.hostname"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostname/domainname for ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"localhost")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.prefix"),(0,n.kt)("td",{parentName:"tr",align:null},"The prefix for endpoints, currently not used"),(0,n.kt)("td",{parentName:"tr",align:null},"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.tlsSecretName"),(0,n.kt)("td",{parentName:"tr",align:null},"The secret name for tls's certificate for https"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.httpPort"),(0,n.kt)("td",{parentName:"tr",align:null},"The http port for ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service.ingress.httpsPort"),(0,n.kt)("td",{parentName:"tr",align:null},"The https port for ingress"),(0,n.kt)("td",{parentName:"tr",align:null},"443")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option.localtime"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostpath for mount as /etc/localtime"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/localtime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option.database"),(0,n.kt)("td",{parentName:"tr",align:null},"The database type, valids: mysql"),(0,n.kt)("td",{parentName:"tr",align:null},"mysql")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option.useConnectionDetailsSecret"),(0,n.kt)("td",{parentName:"tr",align:null},"If use secret instead of configmap for db connection"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option.connectionSecretName"),(0,n.kt)("td",{parentName:"tr",align:null},"The database connection details secret name"),(0,n.kt)("td",{parentName:"tr",align:null},"devlake-db-connection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option.autoCreateSecret"),(0,n.kt)("td",{parentName:"tr",align:null},"If let the helm chart create the secret"),(0,n.kt)("td",{parentName:"tr",align:null},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"awsCognitoAuth.enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"use AWS cognito for authentication"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"awsCognitoAuth.awsAuthRegion"),(0,n.kt)("td",{parentName:"tr",align:null},"aws Cognito auth region"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"awsCognitoAuth.awsAuthUserPoolID"),(0,n.kt)("td",{parentName:"tr",align:null},"aws Cognito user pool ID"),(0,n.kt)("td",{parentName:"tr",align:null},'""')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"awsCognitoAuth.awsAuthUserPoolWebClientID"),(0,n.kt)("td",{parentName:"tr",align:null},"aws Cognito web client ID for the user pool"),(0,n.kt)("td",{parentName:"tr",align:null},'""')))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Can I use a managed Cloud database service instead of running database in docker?"),(0,n.kt)("p",{parentName:"li"},"Yes, it just set useExternal value to true while you deploy devlake with helm chart. Below we'll use MySQL on AWS RDS as an example."),(0,n.kt)("p",{parentName:"li"},"a. (Optional) Create a MySQL instance on AWS RDS following this ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html"},"doc"),", skip this step if you'd like to use an existing instance\nb. Proviede below values while install from helm:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mysql.useExternal"),": this should be ",(0,n.kt)("inlineCode",{parentName:"li"},"true")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mysql.externalServer"),": use your RDS instance's IP address or domain name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mysql.externalPort"),": use your RDS instance's database port."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mysql.username"),": use your ",(0,n.kt)("inlineCode",{parentName:"li"},"username")," for access RDS instance's DB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mysql.password"),": use your ",(0,n.kt)("inlineCode",{parentName:"li"},"password")," for access RDS instance's DB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mysql.database"),": use your RDS instance's DB name, you may need to create a database first with ",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE <DB name>;"))),(0,n.kt)("p",{parentName:"li"},"Here is the example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nhelm install devlake devlake/devlake \\\n  --set mysql.useExternal=true \\\n  --set mysql.externalServer=db.example.com \\\n  --set mysql.externalPort=3306 \\\n  --set mysql.username=admin \\\n  --set mysql.password=password_4_admin \\\n  --set mysql.database=devlake\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Can I use a secret to store the database connection details?"),(0,n.kt)("p",{parentName:"li"},"Yes, to do so, you need to have a secret in your Kubernetes Cluster that contains the following values:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MYSQL_USER"),": The user to connect to your DB.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MYSQL_PASSWORD"),": The password to connect to your DB.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MYSQL_DATABASE"),": The database to connect to your DB.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"MYSQL_ROOT_PASSWORD"),": The root password to connect to your DB.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"DB_URL"),": mysql://",(0,n.kt)("inlineCode",{parentName:"p"},"username"),":",(0,n.kt)("inlineCode",{parentName:"p"},"password"),"@",(0,n.kt)("inlineCode",{parentName:"p"},"dbserver"),":",(0,n.kt)("inlineCode",{parentName:"p"},"port"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"database"),"?charset=utf8mb4&parseTime=True"),(0,n.kt)("p",{parentName:"li"},"The secret name needs to be the same as the value ",(0,n.kt)("inlineCode",{parentName:"p"},"option.connectionSecretName")))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Can I use an external Grafana instead of running built-in Grafana?"),(0,n.kt)("p",{parentName:"li"},"Yes, the devlake helm chart supports using an external Grafana. You can set the following values while installing from helm:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"grafana.useExternal"),": this should be ",(0,n.kt)("inlineCode",{parentName:"p"},"true"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"grafana.externalUrl"),": use your Grafana's URL, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://grafana.example.com")),(0,n.kt)("p",{parentName:"li"},"Here is the example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add devlake https://apache.github.io/incubator-devlake-helm-chart\nhelm repo update\nhelm install devlake devlake/devlake \\\n  --set grafana.useExternal=true \\\n  --set grafana.externalUrl=https://grafana.example.com\n")))),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you run into any problem, please check the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/next/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0}}]);