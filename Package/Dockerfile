FROM mcr.microsoft.com/dotnet/aspnet:5.0

######################################################################################################################
########################################### Environnement Variables ##################################################
# Set for all apt-get install, must be at the very beginning of the Dockerfile.	
ENV DEBIAN_FRONTEND=noninteractive 
ENV ASPNETCORE_ENVIRONMENT="Production"
ENV ASPNETCORE_URLS http://*:5000

######################################################################################################################
########################################### Expose Port or Volumes ###################################################
EXPOSE 5000/tcp

######################################################################################################################
################################################# Install prerequisites ##############################################
RUN apt-get update 
RUN apt-get upgrade -y
RUN apt-get -y install wget curl unzip acl ffmpeg libc6-dev libgdiplus
RUN apt-get update	
RUN apt-get -y install software-properties-common

######################################################################################################################
################################ Download and Install Application ####################################################
RUN mkdir -p /var/www/remotely/
RUN curl -s https://api.github.com/repos/lucent-sea/Remotely/releases/latest | grep "browser_download_url.*Remotely_Server_Linux-x64.zip" | cut -d ":" -f 2,3 | tr -d \" | wget -qi -
RUN unzip -o Remotely_Server_Linux-x64.zip -d /var/www/remotely/
RUN rm Remotely_Server_Linux-x64.zip
RUN setfacl -R -m u:www-data:rwx /var/www/remotely/
RUN chown -R www-data:www-data /var/www/remotely/

WORKDIR /var/www/remotely/
VOLUME /var/www/remotely
ENTRYPOINT ["dotnet", "Remotely_Server.dll"]