<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
	<head>
		<title>Factice</title>
		
		<%@ page isELIgnored="false" %>
		
		<meta charset="utf-8">
		<link href="<c:url value="style.css" />" rel="stylesheet">
		
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="description" content="1 - Qui n'est pas naturel ; faux, artificiel, imité. 2 - Qui est feint, simulé, affecté. 3 - Qui ne résulte pas d'une tendance naturelle, mais des habitudes culturelles." />
        
        <!-- SCRIPTS DE BASE -->
        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <script src="https://code.jquery.com/pep/0.4.1/pep.js"></script>
    </head>
    
    <body>
        <canvas id="renderCanvas"></canvas>
    </body>
</html>