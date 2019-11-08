 /***************************/
//@Author: Eagle Technosys
//@website: www.eagletechnosys.com
//@email: contact@eagletechnosys.com				
/***************************/


/************************************************************************************************************
			  /////////////////////////////////////////////////////////////////////////////////////
			 /////////////////////////START MAIN FUNCTION FOR USE AJAX	//////////////////////////
			/////////////////////////////////////////////////////////////////////////////////////
************************************************************************************************************/

var xmlHttp

function showHint(str)
{
	if (str.length==0)
	{ 
		document.getElementById("txtHint").innerHTML="";
		return;
	}

	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	{
		alert ("Your browser does not support AJAX!");
		return;
	}
	var url="get.php";
	url=url+"?q="+str;
	url=url+"&sid="+Math.random();
	xmlHttp.onreadystatechange=stateChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function ajax() {
	// Make a new XMLHttp object
	
	if (typeof window.ActiveXObject != 'undefined' )
	{ 
		doc =GetXmlHttpObject();
	}
	else
		doc = new XMLHttpRequest();
		

/*	
alert(typeof XMLHttpRequest === "function");
alert(Object.prototype.toString.call(XMLHttpRequest));
alert(typeof XMLHttpRequest.toString);	*/
		
}


function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
		
	   // If IE7, Firefox, Opera 8.0+, Safari, and so on: Use native object.
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			// ...otherwise, use the ActiveX control for IE5.x and IE6.
    		 xmlHttp = new ActiveXObject('MSXML2.XMLHTTP.3.0');
			//xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	//alert(xmlHttp);
	return xmlHttp;
}
 




/************************************************************************************************************
			  ///////////////////////////////////////////////////////////////////////////////////// 
			 ////////////////////////////START MAIN FUNCTIONS/////////////////////////////////////
			/////////////////////////////////////////////////////////////////////////////////////
************************************************************************************************************/
  
 
function Valid_edit_home(frm)
{	
		 var checkFocus=0;
		
	 if(frm.type_id.value==1)
	 {	 
  		if(frm.company_name.value=='')
		{ 
 			document.getElementById("alert_company_name").innerHTML=lang_please_enter_company_name;
			 
 			if(checkFocus!=1)
			{	frm.company_name.focus();				checkFocus=1;			}
		}
 			else
  			document.getElementById("alert_company_name").innerHTML="";			
	
	
	 	 if(isNaN(frm.phone.value)) 
		 {
			document.getElementById("alert_phone").innerHTML=lang_please_enter_numeric_value;
			if(checkFocus!=1)
			{	frm.phone.focus();				checkFocus=1;			};
		 }
		
			else 
			if(frm.phone.value.length<10)
			{
				document.getElementById("alert_phone").innerHTML=lang_please_enter_character_mobile_no;
				if(checkFocus!=1)
				{	frm.phone.focus();				var checkFocus=1;			}
			}
			else
			document.getElementById("alert_phone").innerHTML="";
			
			
			
	 	if(frm.email.value=='')
		{	
			document.getElementById("alert_email").innerHTML=lang_email;
				if(checkFocus!=1)
				{
					frm.email.focus();
					var checkFocus=1;
				}
		}
			else
		{
				var frmEmail1 =frm.email.value.toLowerCase();	
				var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
				if (!frmEmailformat.test(frmEmail1)) 
			{
				document.getElementById("alert_email").innerHTML=lang_please_enter_valid_email_address;
				if(checkFocus!=1)
					frm.email.focus();	
				var checkFocus=1;
			}
				else
			{
				document.getElementById("alert_email").innerHTML="";
			}
		
		}
   			 
		
		if(frm.company_address.value.length<10)
		{
			document.getElementById("alert_company_address").innerHTML=lang_please_enter_the_company_address;
			if(checkFocus!=1)
			{	frm.company_address.focus();				checkFocus=1;			};
		}
			else
 			 document.getElementById("alert_company_address").innerHTML="";

	 }
		 
		 
		 
	if(frm.type_id.value==2)
	{
		
			if(frm.old_pass.value=='')
			{	
				document.getElementById("alert_old_password").innerHTML=lang_please_enter_old_password;
				if(checkFocus!=1)
				{	frm.old_pass.focus();				checkFocus=1;			}
			}
			else
			{
				ajax();
				if (doc)
				{
				   doc.open("GET", site_url+"/ajax.php?section=change_admin_pass&pass="+frm.old_pass.value, false);   
					doc.send(null);
				}
		 // alert(doc.responseText);//return false;
			   if(doc.responseText==0)
			   {	
					document.getElementById("alert_old_password").innerHTML=lang_wrong_password;
					frm.old_pass.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("alert_old_password").innerHTML="";	
 			}
		
		
			if(frm.new_pass.value=='')
			{	
				document.getElementById("alert_new_password").innerHTML=lang_please_enter_new_password;
					if(checkFocus!=1)
					{	frm.new_pass.focus();				var checkFocus=1;			}
			}
			else
				document.getElementById("alert_new_password").innerHTML="";
		
			if(frm.con_pass.value=='')
			{	
				document.getElementById("alert_re_password").innerHTML=lang_please_enter_confirm_password;
					if(checkFocus!=1)
					{	frm.con_pass.focus();				var checkFocus=1;			}
			}
			else
			{ 
				if(frm.new_pass.value!=frm.con_pass.value)
				{
					document.getElementById("alert_re_password").innerHTML=lang_please_enter_same_as_new_password;
					if(checkFocus!=1)
					{	frm.con_pass.focus();				var checkFocus=1;			}
				}
				else
				document.getElementById("alert_re_password").innerHTML="";
			}
		
		
		if(frm.user_name.value=='')
			{	
				document.getElementById("alert_user_name").innerHTML=lang_please_enter_user_name;
					if(checkFocus!=1)
					{	frm.user_name.focus();				var checkFocus=1;			}
			}
			else
				document.getElementById("alert_user_name").innerHTML="";
	
		}
	
	
	
	if(frm.type_id.value==3)		 
	 {		 
		 if(frm.page_row.value=='')
		{
			document.getElementById("alert_page_row").innerHTML=lang_please_enter_the_no_of_page_rows;
			if(checkFocus!=1)
			{	frm.page_row.focus();				checkFocus=1;			};
		}
			else
			 document.getElementById("alert_page_row").innerHTML="";
		 }
		 
	
	if(frm.type_id.value==4)		 
	 {		 
		 if(frm.water_mark_text.value=='')
		{
			document.getElementById("alert_water_mark_text").innerHTML=lang_please_enter_the_water_mark_text;
			if(checkFocus!=1)
			{	frm.water_mark_text.focus();				checkFocus=1;			};
		}
			else
			 document.getElementById("alert_water_mark_text").innerHTML="";
	 }
	 
	 if(frm.type_id.value==5)
	{
		
			if(frm.old_pass.value=='')
			{	
				document.getElementById("alert_old_password").innerHTML=lang_please_enter_old_password;
				if(checkFocus!=1)
				{	frm.old_pass.focus();				checkFocus=1;			}
			}
			else
			{
				ajax();
				if (doc)
				{
				   doc.open("GET", site_url+"/ajax.php?section=change_sub_admin_pass&pass="+frm.old_pass.value, false);   
					doc.send(null);
				}
		//	  alert(doc.responseText);//return false;
			   if(doc.responseText==0)
			   {	
					document.getElementById("alert_old_password").innerHTML=lang_wrong_password;
					frm.old_pass.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("alert_old_password").innerHTML="";	
 			}
		
		
			if(frm.new_pass.value=='')
			{	
				document.getElementById("alert_new_password").innerHTML=lang_please_enter_new_password;
					if(checkFocus!=1)
					{	frm.new_pass.focus();				var checkFocus=1;			}
			}
			else
				document.getElementById("alert_new_password").innerHTML="";
		
			if(frm.con_pass.value=='')
			{	
				document.getElementById("alert_re_password").innerHTML=lang_please_enter_confirm_password;
					if(checkFocus!=1)
					{	frm.con_pass.focus();				var checkFocus=1;			}
			}
			else
			{ 
				if(frm.new_pass.value!=frm.con_pass.value)
				{
					document.getElementById("alert_re_password").innerHTML=lang_please_enter_same_as_new_password;
					if(checkFocus!=1)
					{	frm.con_pass.focus();				var checkFocus=1;			}
				}
				else
				document.getElementById("alert_re_password").innerHTML="";
			}
		
		
		if(frm.user_name.value=='')
			{	
				document.getElementById("alert_user_name").innerHTML=lang_please_enter_user_name;
					if(checkFocus!=1)
					{	frm.user_name.focus();				var checkFocus=1;			}
			}
			else
				document.getElementById("alert_user_name").innerHTML="";
	
		}
	
	
	
	
	if(checkFocus==1)
		return false;
	else
		return true;		
}


 
  function Valid_add_user_step2(frm)
 {
  		 var checkFocus=0;
  	
		//var type_id=frm.type_id.value;
		             
		if(frm.company_name.value=='')
		{
			document.getElementById("company_nameInfo").innerHTML=lang_please_enter_company_name;
			if(checkFocus!=1)
			{	frm.company_name.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("company_nameInfo").innerHTML="";
			 
			
			 if(frm.year_opert.value=='')
				{
			document.getElementById("year_opertInfo").innerHTML=lang_please_enter_the_year_of_operations;
			if(checkFocus!=1)
			{	frm.year_opert.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("year_opertInfo").innerHTML="";
			 
			if(frm.about_user.value=='')
			{
			document.getElementById("about_userInfo").innerHTML=lang_please_enter_the_about_you;
			if(checkFocus!=1)
			{	frm.about_user.focus();				checkFocus=1;			};
			}
			else
 			 document.getElementById("about_userInfo").innerHTML="";
  	
			
			 
		if(checkFocus==1)
			return false;
		else
			return true;
  
 }
 
 function Valid_admin_registration(frm)
{	
 		 var checkFocus=0;
		 
		 //for  broker/agen
	/*	if(frm.user_type[1].checked)
	{
		

		 if(frm.year_opert_a.value=='')
		{
			document.getElementById("year_opert_a_aInfo").innerHTML="Please Enter the year of operations .";
			if(checkFocus!=1)
			{	frm.year_opert_a.focus();			var	checkFocus=1;			}
		}
			else
 			 document.getElementById("year_opert_a_aInfo").innerHTML="";	

	}*/
		
		
		//for builder/promoter
if(frm.user_type[2].checked)
	{
			
			if(frm.company_name.value=='')
		{
			document.getElementById("company_nameInfo").innerHTML=lang_please_enter_company_name;
			if(checkFocus!=1)
			{	frm.company_name.focus();			var	checkFocus=1;			}
		}
			else
 			 document.getElementById("company_nameInfo").innerHTML="";
  
			 
	  if(frm.logo.value==''  && frm.old_company_logo.value=='')
		{	
			document.getElementById("logoInfo").innerHTML=lang_please_upload_image;
				if(checkFocus!=1)
				{
					frm.logo.focus();
					var checkFocus=1;
				}
		}	
		else  if(frm.logo.value!='')
		   {
			 
			var file = frm.logo.value;
			var mime = file.substr(file.lastIndexOf('.'));
			if (mime!= '.gif' && mime!= '.jpg' && mime!= '.pjpg' && mime!= '.JPG' && mime!= '.GIF' && mime!= '.jpeg' && mime!= '.JPEG')
			  {
				document.getElementById("logoInfo").innerHTML=lang_please_upload_proper_image_either_gif_or_jpg;
				if(checkFocus!=1)
				  {
					frm.logo.focus();
					var checkFocus=1;
				  }
			 }
				else
					document.getElementById("logoInfo").innerHTML="";		   
		   }
		   else
				document.getElementById("logoInfo").innerHTML=""; 
			 
			 
		 if(frm.year_opert.value=='')
		{
			document.getElementById("year_opertInfo").innerHTML=lang_please_enter_the_year_of_operations;
			if(checkFocus!=1)
			{	frm.year_opert.focus();			var	checkFocus=1;			}
		}
			else
 			 document.getElementById("year_opertInfo").innerHTML="";
			 
			 
		 if(frm.about_company.value=='')
		{
			document.getElementById("about_companyInfo").innerHTML=lang_please_enter_the_about_company;
			if(checkFocus!=1)
			{	frm.about_company.focus();			var	checkFocus=1;			}
		}
			else
 			 document.getElementById("about_companyInfo").innerHTML=""; 
	}	
				
  	
		//same for all
		
	 	if(frm.user_name.value.length <'')
		{	
			document.getElementById("user_nameInfo").innerHTML=lang_user_name;
			if(checkFocus!=1)
			{	frm.user_name.focus();			var	checkFocus=1;			}
		}
		
		
			else
			document.getElementById("user_nameInfo").innerHTML="";
		
		
	 	if(frm.email.value=='')
		{	
			document.getElementById("emailInfo").innerHTML=lang_email;
				if(checkFocus!=1)
				{
					frm.email.focus();
					var checkFocus=1;
				}
		}
			else
		{
				var frmEmail1 =frm.email.value.toLowerCase();	
				var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
				if (!frmEmailformat.test(frmEmail1)) 
			{
				document.getElementById("emailInfo").innerHTML=lang_please_enter_valid_email_address;
				if(checkFocus!=1)
					frm.email.focus();	
				var checkFocus=1;
			}
			
			   else
				document.getElementById("emailInfo").innerHTML="";
			}
	
   			 
  		/*if(frm.password.value.length <5)
		{ 
 			document.getElementById("passwordInfo").innerHTML="Please Enter Atleast 5 Character Password.";
			 
 			if(checkFocus!=1)
			{	frm.password.focus();			var	checkFocus=1;			}
			}
 			else
  			document.getElementById("passwordInfo").innerHTML="";*/
		
		
		if(frm.password.value=='')
		{
			
			if(frm.old_pass.value=='')
			{
				document.getElementById("passwordInfo").innerHTML=lang_please_enter_password;
				if(checkFocus!=1)
				{	frm.password.focus();			var	checkFocus=1;			}
			}
			else
				document.getElementById("re_passwordInfo").innerHTML="";
			
		}
		else
		{
		 
			if(frm.password.value.length <5)
			{ 
				document.getElementById("passwordInfo").innerHTML=lang_user_name;
				 
				if(checkFocus!=1)
				{	frm.password.focus();			var	checkFocus=1;			}
			}
			else
			{
				if(frm.password.value != frm.re_password.value )
				{ 
					document.getElementById("re_passwordInfo").innerHTML=lang_not_math_password;
					if(checkFocus!=1)
					{	frm.re_password.focus();			var	checkFocus=1;			}
				}
				else
					document.getElementById("re_passwordInfo").innerHTML="";
			}
		}
	  
			 
 
	
	
	
 		if(frm.name.value=='')
		{
			document.getElementById("nameInfo").innerHTML=lang_please_enter_the_name;
			if(checkFocus!=1)
			{	frm.name.focus();			var	checkFocus=1;			}
		}
			else
 			 document.getElementById("nameInfo").innerHTML="";
			 
		if(frm.address.value=='')
		{
			document.getElementById("addressInfo").innerHTML=lang_please_enter_the_address;
			if(checkFocus!=1)
			{	frm.address.focus();			var	checkFocus=1;			}
			}
			else
 			 document.getElementById("addressInfo").innerHTML=""; 
  	
	
		if(frm.country.value=='')
		{	  
			document.getElementById("countryInfoty").innerHTML=lang_please_select_country;
			if(checkFocus!=1)
			{	frm.country.focus();				var checkFocus=1;			}
		}
			else
				document.getElementById("countryInfoty").innerHTML="";
			 
		
		if(frm.country.value=='India')		
		{ 
			if(frm.state.value=='')
			{	
				document.getElementById("stateInfotr").innerHTML=lang_please_select_state;
				if(checkFocus!=1)
				{	frm.state.focus();				var checkFocus=1;			}
			}
				else
				document.getElementById("stateInfotr").innerHTML="";
				
				 
			if(frm.city.value=='')
			{	 
				document.getElementById("cityInfo").innerHTML=lang_please_select_city;
				if(checkFocus!=1)
				{	frm.city.focus();			var	checkFocus=1;			}
			}
				else
				document.getElementById("cityInfo").innerHTML="";
		}
		 else 
		  if(frm.country.value!='')
		   {
				if(frm.new_state.value=='')
				{	
					document.getElementById("oth_stateInfo").innerHTML=lang_please_enter_state;
					if(checkFocus!=1)
					{	frm.new_state.focus();				var checkFocus=1;			}
				}
					else
					document.getElementById("oth_stateInfo").innerHTML="";
					
					 
				if(frm.new_city.value=='')
				{	 
					document.getElementById("oth_cityInfo").innerHTML=lang_please_enter_city;
					if(checkFocus!=1)
					{	frm.new_city.focus();			var	checkFocus=1;			}
				}
					else
					document.getElementById("oth_cityInfo").innerHTML="";  
		   }
	
/*	
		if(frm.country.value=='')
		{	
			document.getElementById("countryInfo").innerHTML="<span class='alert'>Please Select Country.</span>";
			if(checkFocus!=1)
			{	frm.country.focus();			var	checkFocus=1;			}
			}
			else
			document.getElementById("countryInfo").innerHTML="";
			
		if(frm.state.value=='')
		{	
			document.getElementById("stateInfo").innerHTML="<span class='alert'>Please Select State.</span>";
			if(checkFocus!=1)
			{	frm.state.focus();			var	checkFocus=1;			}
			}
			else
			document.getElementById("stateInfo").innerHTML="";
			
			
		if(frm.city.value=='')
		{	
			document.getElementById("cityInfo").innerHTML="<span class='alert'>Please Select City.</span>";
			if(checkFocus!=1)
			{	frm.city.focus();			var	checkFocus=1;			}
			}
			else
			document.getElementById("cityInfo").innerHTML="";	
*/	
 		if(isNaN(frm.mobile.value)) {
			document.getElementById("mobileInfo").innerHTML=lang_please_enter_numeric_value;
			if(checkFocus!=1)
			{	frm.mobile.focus();			var	checkFocus=1;			}
			}
		
		else 
		if(frm.mobile.value.length< 10)
		{
		document.getElementById("mobileInfo").innerHTML=lang_please_enter_10_character_mobile_no;
				if(checkFocus!=1)
				{	frm.mobile.focus();				var checkFocus=1;			}
				}
			else
			document.getElementById("mobileInfo").innerHTML="";
			

		if(checkFocus==1)
			return false;
		else
			return true;
 }	
 
 
 function Valid_admin_download(frm)
 {
	  var checkFocus=0;
	  
	  if(frm.title.value=='')
		{	 
			document.getElementById("titleInfo").innerHTML=lang_please_enter_title;
			if(checkFocus!=1)
			{	frm.title.focus();			var	checkFocus=1;			}
		}
			else
			document.getElementById("titleInfo").innerHTML=""; 
			
			
	 	if(frm.main_img.value==''  && frm.old_main_img.value=='')
		{	
			document.getElementById("alert_main_img").innerHTML=lang_please_upload_file;
				if(checkFocus!=1)
				{
					frm.main_img.focus();
					var checkFocus=1;
				}
		}	
		else  if(frm.main_img.value!='')
		   {
			 
			var file = frm.main_img.value;
			var mime = file.substr(file.lastIndexOf('.'));
						
			if (mime!= '.doc' && mime!= '.docx' && mime!= '.pdf')
			  {
				document.getElementById("alert_main_img").innerHTML=lang_please_upload_proper_file_either_doc_or_pdf;
				if(checkFocus!=1)
				  {
					frm.main_img.focus();
					var checkFocus=1;
				  }
			 }
				else
					document.getElementById("alert_main_img").innerHTML="";		   
		   }
		   else
				document.getElementById("alert_main_img").innerHTML=""; 		 
	  
	  if(checkFocus==1)
			return false;
		else
			return true;
 }



function Valid_add_mails(frm)
 {
	  var checkFocus=0;
	  
	  if(frm.subject.value=='')
		{	 
			document.getElementById("alert_name").innerHTML=lang_please_enter_title;
			if(checkFocus!=1)
			{	frm.subject.focus();	
				var	checkFocus=1;	
			}
		}
			else
			document.getElementById("alert_name").innerHTML=""; 
			
			
	 	if(frm.mail_editor.value=='' )
		{	
			document.getElementById("alert_msg").innerHTML=lang_please_enter_content;
				if(checkFocus!=1)
				{
					frm.alert_msg.focus();
					var checkFocus=1;
				}
		}	
		
		   else
				document.getElementById("alert_msg").innerHTML=""; 		 
	  
	  if(checkFocus==1)
			return false;
		else
			return true;
 }
 
//==============================================================general setting validation=======================================================================// 
function valid_contact_info(frm)
{
	 var checkFocus=0;
  if(frm.company_name.value=='')
   	{
	 document.getElementById("alert_company_name").innerHTML=lang_please_enter_the_company_address;
	     if(checkFocus!=1)
		  {
			   frm.company_name.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_company_name").innerHTML="";
	  
  if(frm.company_address.value=='')
   	{
	 document.getElementById("alert_company_address").innerHTML=lang_please_enter_the_company_address;
	     if(checkFocus!=1)
		  {
			   frm.company_address.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_company_address").innerHTML="";
	  
  if(frm.phone.value=='')
   	{
	 document.getElementById("alert_company_phone").innerHTML=lang_please_enter_phone_number;
	     if(checkFocus!=1)
		  {
			   frm.phone.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_company_phone").innerHTML="";
	
	  if(frm.email.value=='')
		{	
			document.getElementById("alert_company_email").innerHTML=lang_email;
				if(checkFocus!=1)
				{
					frm.email.focus();
					var checkFocus=1;
				}
		}
			else
		{
				var frmEmail1 =frm.email.value.toLowerCase();	
				var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
				if (!frmEmailformat.test(frmEmail1)) 
			{
				document.getElementById("alert_company_email").innerHTML=lang_please_enter_valid_email_address;
				if(checkFocus!=1)
					frm.email.focus();	
				var checkFocus=1;
			}
				else
			{
				document.getElementById("alert_company_email").innerHTML="";
			}
		
		} 


	  
	
	if(frm.support_email.value=='')
   		{
	 document.getElementById("alert_company_support").innerHTML=lang_please_enter_website_address;
	     if(checkFocus!=1)
		  {
			   frm.support_email.focus();
			   checkFocus=1;
		  }
   		}
   else
      document.getElementById("alert_company_support").innerHTML=""; 
	  
	  if(frm.tax_no.value=='')
   		{
	 document.getElementById("alert_company_tax").innerHTML=lang_please_enter_tax_no;
	     if(checkFocus!=1)
		  {
			   frm.webmaster_email.focus();
			   checkFocus=1;
		  }
   		}
   else
      document.getElementById("alert_company_tax").innerHTML=""; 
	  
	  if(frm.invoice_days.value=='')
   		{
	 document.getElementById("alert_company_invoice").innerHTML=lang_please_page_row;
	     if(checkFocus!=1)
		  {
			   frm.invoice_days.focus();
			   checkFocus=1;
		  }
   		}
   else
      document.getElementById("alert_company_invoice").innerHTML="";     
	  
	  
	  if(isNaN(frm.mobile.value)) {
			document.getElementById("alert_company_mobile").innerHTML=lang_please_enter_numeric_value;
			if(checkFocus!=1)
			{	frm.mobile.focus();				 var checkFocus=1;			} 
			}
		
		else 
		if(frm.mobile.value.length< 10)
		{
		document.getElementById("alert_company_mobile").innerHTML=lang_please_enter_10_character_mobile_no;
				if(checkFocus!=1)
				{	frm.mobile.focus();				var checkFocus=1;			}
				}
			else
			document.getElementById("alert_company_mobile").innerHTML="";
  
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

}

function valid_site_info(frm)
{
	 var checkFocus=0;
  if(frm.site_title.value=='')
   	{
	 document.getElementById("alert_site_title").innerHTML=lang_please_enter_site_title;
	     if(checkFocus!=1)
		  {
			   frm.site_title.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_site_title").innerHTML="";
	  
	if(frm.site_description.value=='')
   	{
	 document.getElementById("alert_site_description").innerHTML=lang_please_enter_site_description;
	     if(checkFocus!=1)
		  {
			   frm.site_description.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_site_description").innerHTML="";  
	  
	  if(frm.site_keyword.value=='')
   	{
	 document.getElementById("alert_site_keyword").innerHTML=lang_please_enter_site_keyword;
	     if(checkFocus!=1)
		  {
			   frm.site_keyword.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_site_keyword").innerHTML="";  
	  
	    if(frm.watermark.value=='')
   	{
	 document.getElementById("alert_site_watermark").innerHTML=lang_please_enter_site_watermark;
	     if(checkFocus!=1)
		  {
			   frm.watermark.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_site_watermark").innerHTML="";  
	  
	    if(frm.adminfooter.value=='')
   	{
	 document.getElementById("alert_site_adminfooter").innerHTML=lang_please_enter_admin_footer;
	     if(checkFocus!=1)
		  {
			   frm.adminfooter.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_site_adminfooter").innerHTML="";  
	  
  
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

}

function valid_site_status(frm)
{
	 var checkFocus=0;
  if(frm.under_construction.value=='')
   	{
	 document.getElementById("alert_site_status").innerHTML=lang_please_enter_custom_message;
	     if(checkFocus!=1)
		  {
			   frm.under_construction.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_site_status").innerHTML="";
	  
	
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

}

function valid_admin_account_sett(frm)
{
	 var checkFocus=0;
	 if(frm.old_password.value=='')
			{	
				document.getElementById("alert_old_password").innerHTML=lang_please_enter_old_password;
				if(checkFocus!=1)
				{	frm.old_password.focus();				checkFocus=1;			}
			}
			else
			{
				ajax();
				if (doc)
				{
				   doc.open("GET", site_url+"/ajax.php?section=change_admin_pass&pass="+frm.old_password.value, false);   
					doc.send(null);
				}
		 // alert(doc.responseText);//return false;
			   if(doc.responseText==0)
			   {	
					document.getElementById("alert_old_password").innerHTML=lang_wrong_password;
					frm.old_password.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("alert_old_password").innerHTML="";	
 			}
		
		
			if(frm.new_password.value=='')
			{	
				document.getElementById("alert_new_password").innerHTML=lang_please_enter_new_password;
					if(checkFocus!=1)
					{	frm.new_password.focus();				var checkFocus=1;			}
			}
			else
				document.getElementById("alert_new_password").innerHTML="";
		
			if(frm.confirm_password.value=='')
			{	
				document.getElementById("alert_re_password").innerHTML=lang_please_enter_confirm_password;
					if(checkFocus!=1)
					{	frm.confirm_password.focus();				var checkFocus=1;			}
			}
			else
			{ 
				if(frm.new_password.value!=frm.confirm_password.value)
				{
					document.getElementById("alert_re_password").innerHTML=lang_please_enter_same_as_new_password;
					if(checkFocus!=1)
					{	frm.confirm_password.focus();				var checkFocus=1;			}
				}
				else
				document.getElementById("alert_re_password").innerHTML="";
			}
		
		
		if(frm.admin_name.value=='')
			{	
				document.getElementById("alert_admin_name").innerHTML=lang_please_enter_user_name;
					if(checkFocus!=1)
					{	frm.admin_name.focus();				var checkFocus=1;			}
			}
			else
				document.getElementById("alert_admin_name").innerHTML="";
	
	
	 if(checkFocus==1)
		 return false;
	 else
		 return true;
}

function valid_admin_profile_sett(frm)
{
	 var checkFocus=0;
		
		if(frm.user_name.value=='')
			{	
				document.getElementById("alert_user_name").innerHTML=lang_please_enter_user_name;
					if(checkFocus!=1)
					{	frm.user_name.focus();				var checkFocus=1;			}
			}
			else
				document.getElementById("alert_user_name").innerHTML="";
				
		if(frm.phone.value=='')
   	{
	 document.getElementById("alert_phone").innerHTML=lang_please_enter_phone_number;
	     if(checkFocus!=1)
		  {
			   frm.phone.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_phone").innerHTML="";
	
	  if(frm.email.value=='')
		{	
			document.getElementById("alert_email").innerHTML=lang_email;
				if(checkFocus!=1)
				{
					frm.email.focus();
					var checkFocus=1;
				}
		}
			else
		{
				var frmEmail1 =frm.email.value.toLowerCase();	
				var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
				if (!frmEmailformat.test(frmEmail1)) 
			{
				document.getElementById("alert_email").innerHTML=lang_please_enter_valid_email_address;
				if(checkFocus!=1)
					frm.email.focus();	
				var checkFocus=1;
			}
				else
			{
				document.getElementById("alert_email").innerHTML="";
			}
		
		} 		
	
	
	 if(checkFocus==1)
		 return false;
	 else
		 return true;
}
 
function valid_currency(frm)
{
	 var checkFocus=0;
  if(frm.currency_name.value=='')
   	{
	 document.getElementById("alert_currency_name").innerHTML=lang_please_enter_currency_name;
	     if(checkFocus!=1)
		  {
			   frm.currency_name.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_currency_name").innerHTML="";
	  
	 if(frm.currency_symbol.value=='')
   	{
	 document.getElementById("alert_currency_symbol").innerHTML=lang_please_enter_currency_symbol;
	     if(checkFocus!=1)
		  {
			   frm.currency_symbol.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_currency_symbol").innerHTML=""; 
	  
	
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 

function valid_currency(frm)
{
	 var checkFocus=0;
  if(frm.currency_name.value=='')
   	{
	 document.getElementById("alert_currency_name").innerHTML=lang_please_enter_country_name;
	     if(checkFocus!=1)
		  {
			   frm.currency_name.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_currency_name").innerHTML="";
	  
	 if(frm.currency_symbol.value=='')
   	{
	 document.getElementById("alert_currency_symbol").innerHTML=lang_please_enter_currency_symbol;
	     if(checkFocus!=1)
		  {
			   frm.currency_symbol.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_currency_symbol").innerHTML=""; 
	  
	
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 

function valid_currency(frm)
{
	 var checkFocus=0;
  if(frm.currency_name.value=='')
   	{
	 document.getElementById("alert_currency_name").innerHTML=lang_please_enter_country_name;
	     if(checkFocus!=1)
		  {
			   frm.currency_name.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_currency_name").innerHTML="";
	  
	 if(frm.currency_symbol.value=='')
   	{
	 document.getElementById("alert_currency_symbol").innerHTML=lang_please_enter_currency_symbol;
	     if(checkFocus!=1)
		  {
			   frm.currency_symbol.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_currency_symbol").innerHTML=""; 
	  
	
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 

function valid_country(frm)
{
	 var checkFocus=0;
  if(frm.country_name.value=='')
   	{
	 document.getElementById("alert_country_name").innerHTML=lang_please_enter_country_name;
	     if(checkFocus!=1)
		  {
			   frm.country_name.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_country_name").innerHTML="";
	  
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 
function valid_state(frm)
{
	
	 var checkFocus=0;
 if(frm.state_name.value=='')
		{	
			document.getElementById("alert_state_name").innerHTML=lang_please_enter_state;
			if(checkFocus!=1)
			{	frm.state_name.focus();			var	checkFocus=1;			}
		}
		else
			{ 
				ajax();
				if (doc){ 
				   doc.open("GET", site_url+"/ajax.php?section=check_state&state_name="+frm.state_name.value, false);   
					doc.send(null);
				   }
	 	  	//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
					document.getElementById("alert_state_name").innerHTML=lang_state_already_exists;
					frm.state_name.focus();
					var	 checkFocus=1;
			   }
			else
			document.getElementById("alert_state_name").innerHTML="";
			}
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 
/**********************************Validation of add City*********************************************************/
function valid_city(frm)
{
	 var checkFocus=0;
 if(frm.city_name.value=='')
		{	
			document.getElementById("alert_city_name").innerHTML=lang_please_enter_city_name;
			if(checkFocus!=1)
			{	frm.city_name.focus();			var	checkFocus=1;			}
		}
		else
			{ 
			
				ajax();
				if (doc){ 
					   doc.open("GET", site_url+"/ajax.php?section=check_city&city_name="+frm.city_name.value+"&state_name="+frm.sel_state.value, false);   
						doc.send(null);
				   }
	 	  	//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
					document.getElementById("alert_city_name").innerHTML=lang_city_already_exists;
					frm.city_name.focus();
					var	 checkFocus=1;
			   }
			else
			document.getElementById("alert_city_name").innerHTML="";
			}
			
		 if(frm.latitute.value=='')
   	{
	 document.getElementById("alert_latitute").innerHTML=lang_please_enter_latitute;
	     if(checkFocus!=1)
		  {
			   frm.latitute.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_latitute").innerHTML="";
	  
	   if(frm.longitude.value=='')
   	{
	 document.getElementById("alert_longitude").innerHTML=lang_please_enter_longitude;
	     if(checkFocus!=1)
		  {
			   frm.country_name.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_longitude").innerHTML="";	
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 

function valid_edit_all(frm)
{
	 var checkFocus=0;
	 
	 if(frm.edit_state_name.value=='')
		{	
			document.getElementById("alert_edit_state").innerHTML=lang_please_enter_state;
			if(checkFocus!=1)
			{	frm.edit_state_name.focus();			var	checkFocus=1;			}
		}
		else
			{ 
				ajax();
				if (doc){ 
				   doc.open("GET", site_url+"/ajax.php?section=check_state&state_name="+frm.edit_state_name.value, false);   
					doc.send(null);
				   }
	 	  	//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
					document.getElementById("alert_edit_state").innerHTML=lang_state_already_exists;
					frm.edit_state_name.focus();
					var	 checkFocus=1;
			   }
			else
			document.getElementById("alert_edit_state").innerHTML="";
			}
	 
	 
	 
	 
	 
 if(frm.edit_city_name.value=='')
		{	
			document.getElementById("alert_edit_city").innerHTML=lang_please_enter_city_name;
			if(checkFocus!=1)
			{	frm.edit_city_name.focus();			var	checkFocus=1;			}
		}
		else
			{ 
			
				ajax();
				if (doc){ 
					   doc.open("GET", site_url+"/ajax.php?section=check_city&city_name="+frm.edit_city_name.value+"&state_name="+frm.edit_state_name.value, false);   
						doc.send(null);
				   }
	 	  	//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
					document.getElementById("alert_edit_city").innerHTML=lang_city_already_exists;
					frm.edit_city_name.focus();
					var	 checkFocus=1;
			   }
			else
			document.getElementById("alert_edit_city").innerHTML="";
			}
			
		 if(frm.edit_latitute.value=='')
   	{
	 document.getElementById("alert_edit_latitute").innerHTML=lang_please_enter_latitute;
	     if(checkFocus!=1)
		  {
			   frm.edit_latitute.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_edit_latitute").innerHTML="";
	  
	   if(frm.edit_longitude.value=='')
   	{
	 document.getElementById("alert_edit_longitute").innerHTML=lang_please_enter_longitude;
	     if(checkFocus!=1)
		  {
			   frm.edit_longitude.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_edit_longitute").innerHTML="";	
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 
function valid_gallery_frm(frm)
{
	 var checkFocus=0;
 if(frm.title.value=='')
		{	
			document.getElementById("alert_title").innerHTML=lang_please_enter_title;
			if(checkFocus!=1)
			{	frm.title.focus();			var	checkFocus=1;			}
		}
		else
			document.getElementById("alert_title").innerHTML="";
	
			
		 if(frm.descri.value=='')
   	{
	 document.getElementById("alert_description").innerHTML=lang_please_enter_description;
	     if(checkFocus!=1)
		  {
			   frm.descri.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_description").innerHTML="";
	  
	   if(frm.price.value=='')
   	{
	 document.getElementById("alert_price").innerHTML=lang_please_enter_price;
	     if(checkFocus!=1)
		  {
			   frm.price.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_price").innerHTML="";	
	  
	  
	   if(frm.url.value=='')
   	{
	 document.getElementById("alert_url").innerHTML=lang_please_enter_url;
	     if(checkFocus!=1)
		  {
			   frm.url.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_url").innerHTML="";	
	  
	  
	     if(frm.start_date.value=='')
   	{
	 document.getElementById("alert_str_date").innerHTML=lang_please_enter_start_date;
	     if(checkFocus!=1)
		  {
			   frm.start_date.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_str_date").innerHTML="";	
	  
if(frm.end_date.value=='')
   	{
	 document.getElementById("alert_end_date").innerHTML=lang_please_enter_end_data;
	     if(checkFocus!=1)
		  {
			   frm.end_date.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_end_date").innerHTML="";
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 

function valid_mails(frm)
{
	 var checkFocus=0;
  if(frm.mail_subject.value=='')
   	{
	 document.getElementById("alert_subject").innerHTML=lang_please_enter_subject;
	     if(checkFocus!=1)
		  {
			   frm.mail_subject.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_subject").innerHTML="";
	  
	  
	  if(frm.message.value=='')
   	{
	 document.getElementById("alert_message").innerHTML=lang_please_enter_message;
	     if(checkFocus!=1)
		  {
			   frm.message.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_message").innerHTML="";
	  
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

} 

function valid_create_page(frm)
{
	 var checkFocus=0;
  if(frm.pg_title.value=='')
   	{
	 document.getElementById("alert_pgtitle").innerHTML=lang_please_enter_title;
	     if(checkFocus!=1)
		  {
			   frm.pg_title.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_pgtitle").innerHTML="";
	  
	  
	  if(frm.pg_matter.value=='')
   	{
	 document.getElementById("alert_pgmatter").innerHTML=lang_please_enter_matter;
	     if(checkFocus!=1)
		  {
			   frm.pg_matter.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_pgmatter").innerHTML="";
	  
	    if(frm.priorty.value=='')
   	{
	 document.getElementById("alert_prioty").innerHTML=lang_please_select_priorty;
	     if(checkFocus!=1)
		  {
			   frm.priorty.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_prioty").innerHTML="";
	  
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;
} 




function valid_add_product(frm)
{
 		
		 var checkFocus=0;
	
		 
		 if(frm.product_name.value.length=='')
		{	
			document.getElementById("alert_product_name").innerHTML=lang_please_enter_product_name;
			if(checkFocus!=1)
			{	frm.product_name.focus();			var	checkFocus=1;			}
		}
		else
			{ 
				ajax();
				if (doc){ 
				
				   doc.open("GET", site_url+"/ajax.php?section=check_product_name&pro_name="+frm.product_name.value+"&pro_type="+frm.pro_cate.value, false);   
					doc.send(null);
				   }
	 	  	//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
					document.getElementById("alert_product_name").innerHTML=lang_product_name_already_exists;
					frm.product_name.focus();
					var	 checkFocus=1;
			   }
			else
			document.getElementById("alert_product_name").innerHTML="";
			}
	 
		
			if(frm.product_price.value=='')
			{	
				document.getElementById("alert_product_price").innerHTML=lang_please_enter_product_price;
				if(checkFocus!=1)
				{	frm.product_price.focus();				var checkFocus=1;			}
			}
				else
				document.getElementById("alert_product_price").innerHTML="";
		

				
			if(frm.pro_cate.value=='')
			{	 
				document.getElementById("alert_product_type").innerHTML=lang_please_select_product_type;
				if(checkFocus!=1)
				{	frm.pro_cate.focus();			var	checkFocus=1;			}
			}
				else
				document.getElementById("alert_product_type").innerHTML="";
				
	
		//alert(checkFocus);
		
		if(checkFocus==1)
			return false;
		else
		{
			alert(lang_sucessfully_add_your_product);
			return true;
		}
 
}


function valid_add_invoice(frm)
{
 		
		 var checkFocus=0;
		
			if(frm.sel_cust.value=='')
			{	
				document.getElementById("alert_customer_sel").innerHTML=lang_Please_select_customer;
				if(checkFocus!=1)
				{	frm.sel_cust.focus();				var checkFocus=1;			}
			}
				else
				document.getElementById("alert_customer_sel").innerHTML="";
		

				
			if(frm.invoice_date.value=='')
			{	 
				document.getElementById("alert_invoice_date").innerHTML=lang_please_enter_invoice_date;
				if(checkFocus!=1)
				{	frm.invoice_date.focus();			var	checkFocus=1;			}
			}
				else
				document.getElementById("alert_invoice_date").innerHTML="";
				
			if(frm.order_no.value=='')
			{	 
				document.getElementById("alert_order_no").innerHTML=lang_please_enter_order_no;
				if(checkFocus!=1)
				{	frm.order_no.focus();			var	checkFocus=1;			}
			}
				else
				document.getElementById("alert_order_no").innerHTML="";	
				
	
		//alert(checkFocus);
		
		if(checkFocus==1)
			return false;
		else
		{
			alert(lang_sucessfully_add_your_product);
			return true;
		}
 
}



function valid_add_invoice_payment(frm)
{
 		
		 var checkFocus=0;
		
			if(frm.payment_date.value=='')
			{	 
				document.getElementById("alert_payment_date").innerHTML=lang_please_enter_amount;
				if(checkFocus!=1)
				{	frm.payment_date.focus();			var	checkFocus=1;			}
			}
				else
				document.getElementById("alert_payment_date").innerHTML="";
				
			if(frm.amount.value=='')
			{	 
				document.getElementById("alert_amount_date").innerHTML=lang_please_enter_amount;
				if(checkFocus!=1)
				{	frm.amount.focus();			var	checkFocus=1;			}
			}
				else
				document.getElementById("alert_amount_date").innerHTML="";	
				
				
				if(frm.method.value=='')
			{	 
				document.getElementById("alert_method_date").innerHTML=lang_please_enter_method;
				if(checkFocus!=1)
				{	frm.method.focus();			var	checkFocus=1;			}
			}
				else
				document.getElementById("alert_method_date").innerHTML="";	
				
	
		//alert(checkFocus);
		
		if(checkFocus==1)
			return false;
		else
		{
			return true;
		}
 
}


function Valid_user(frm)
{
	var ckeckFocus=0;
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").innerHTML=lang_please_enter_name;
			if(ckeckFocus!=1)
			{
				frm.name.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("name").innerHTML="";
	
	if(frm.address.value=='')
	{	
		document.getElementById("address").innerHTML=lang_please_enter_address;
			if(ckeckFocus!=1)
			{
				frm.address.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("address").innerHTML="";
	
	if(frm.phone.value=='')
	{	
		document.getElementById("phone").innerHTML=lang_please_enter_phone_no;
			if(ckeckFocus!=1)
			{
				frm.phone.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("phone").innerHTML="";
	
	if(frm.email.value=='')
	{	
		document.getElementById("email").innerHTML=lang_email;
			if(ckeckFocus!=1)
			{
				frm.email.focus();
				var ckeckFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("email").innerHTML=lang_please_enter_valid_email_address;
			if(ckeckFocus!=1)
				frm.email.focus();	
			var ckeckFocus=1;
		}
		else
		document.getElementById("email").innerHTML="";
	}
	
	if(frm.username.value=='')
	{	
		document.getElementById("username").innerHTML=lang_please_enter_user_name;
			if(ckeckFocus!=1)
			{
				frm.username.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("username").innerHTML="";
	
	if(frm.password.value=='')
	{	
		document.getElementById("password").innerHTML=lang_please_enter_new_password;
			if(ckeckFocus!=1)
			{
				frm.password.focus();
				var ckeckFocus=1;
			}
	}
	else
	
		document.getElementById("password").innerHTML="";
		
		
		if(frm.password.value!=frm.con_password.value)
		{
			document.getElementById("con_password").innerHTML=lang_please_enter_confirm_password;
			if(ckeckFocus!=1)
				frm.con_password.focus();
			var ckeckFocus=1;	
		}
		else
			document.getElementById("con_password").innerHTML="";
	
	if(frm.privilege.value=='')
	{	
		document.getElementById("privilege").innerHTML=lang_please_enter_privilege;
			if(ckeckFocus!=1)
			{
				frm.privilege.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("privilege").innerHTML="";
		
	if(ckeckFocus==1)
		return false;
	else
		return true;
}

function Valid_messanger(frm)
{
	var ckeckFocus=0;
	
	if(frm.name.value=='')
	{	
		document.getElementById("name").innerHTML=lang_please_enter_name;
			if(ckeckFocus!=1)
			{
				frm.name.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("name").innerHTML="";
	
	if(frm.code.value=='')
	{	
		document.getElementById("code").innerHTML=lang_please_enter_code;
			if(ckeckFocus!=1)
			{
				frm.code.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("code").innerHTML="";
	
	if(frm.phone.value=='')
	{	
		document.getElementById("phone").innerHTML=lang_please_enter_phone_no;
			if(ckeckFocus!=1)
			{
				frm.phone.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("phone").innerHTML="";
	
	if(frm.email.value=='')
	{	
		document.getElementById("email").innerHTML=lang_email;
			if(ckeckFocus!=1)
			{
				frm.email.focus();
				var ckeckFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("email").innerHTML=lang_please_enter_valid_email_address;
			if(ckeckFocus!=1)
				frm.email.focus();	
			var ckeckFocus=1;
		}
		else
		document.getElementById("email").innerHTML="";
	}
	
	if(frm.branch.value=='')
	{	
		document.getElementById("branch").innerHTML=lang_please_enter_branch;
			if(ckeckFocus!=1)
			{
				frm.branch.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("branch").innerHTML="";
	

	if(frm.city.value=='')
	{	
		document.getElementById("city").innerHTML=lang_please_enter_privilege;
			if(ckeckFocus!=1)
			{
				frm.city.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("city").innerHTML="";
		
		
		if(frm.vehicle_no.value=='')
	{	
		document.getElementById("vehicle_no").innerHTML=lang_please_enter_privilege;
			if(ckeckFocus!=1)
			{
				frm.vehicle_no.focus();
				var ckeckFocus=1;
			}
	}
	else
		document.getElementById("vehicle_no").innerHTML="";
	
		
	if(ckeckFocus==1)
		return false;
	else
		return true;
}

//==================================================validation Weight Range===========================================//
function validWeightRange(frm)
{
	var ckeckFocus=0;
	
	
	
		if(frm.start_range.value=='')
		{	
			document.getElementById("alert_start_range_info").innerHTML=lang_please_enter_start_weight_range;
				if(ckeckFocus!=1)
				{
					frm.start_range.focus();
					var ckeckFocus=1;
				}
		}
		else
			document.getElementById("alert_start_range_info").innerHTML="";
			
		
		if(frm.end_range.value=='')
		{	
			document.getElementById("alert_end_range_info").innerHTML=lang_please_enter_end_weight_range;
				if(ckeckFocus!=1)
				{
					frm.end_range.focus();
					var ckeckFocus=1;
				}
		}
		else
			document.getElementById("alert_end_range_info").innerHTML="";
		

	if(ckeckFocus==1)
			return false;
		else
			return true;
}


function Valid_schedule1(frm)
{
	 
	var checkFocus=0;
	
	
	if(frm.sender_name.value=='')
	{	
		document.getElementById("name_info").innerHTML=lang_please_enter_name;
			if(checkFocus!=1)
			{ 
				frm.sender_name.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("name_info").innerHTML="";
	
	if(frm.sender_address.value=='')
	{	
		document.getElementById("address_info").innerHTML=lang_please_enter_the_address;
			if(checkFocus!=1)
			{
				frm.sender_address.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("address_info").innerHTML="";
	
	if(frm.sender_zip.value=='')
	{	
		document.getElementById("zip_info").innerHTML=lang_please_enter_zip_code;
			if(checkFocus!=1)
			{
				frm.sender_zip.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("zip_info").innerHTML="";
		
		if(frm.sender_phone.value=='')
	{	
		document.getElementById("zip_info").innerHTML=lang_please_enter_consignee_phone_no;
			if(checkFocus!=1)
			{
				frm.sender_phone.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("zip_info").innerHTML="";
		
		
	/*	if(frm.origin_sel.value=='')
	{	
		document.getElementById("city_info").innerHTML="<span class='alert'>Please Select origin city</span>";
			if(checkFocus!=1)
			{
				frm.origin_sel.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("city_info").innerHTML="";*/
		
	/*	if(frm.area.value=='')
	{	
		document.getElementById("area_info").innerHTML="<span class='alert'>Please enter origin area</span>";
			if(checkFocus!=1)
			{
				frm.area.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("area_info").innerHTML="";
		
		if(frm.desctination_sel.value=='')
	{	
		document.getElementById("destination_info").innerHTML="<span class='alert'>Please Select Destination City</span>";
			if(checkFocus!=1)
			{
				frm.desctination_sel.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("destination_info").innerHTML="";
		
		if(frm.dimensions.value=='')
	{	
		document.getElementById("dimensions_info").innerHTML="<span class='alert'>Please enter Dimensions</span>";
			if(checkFocus!=1)
			{
				frm.dimensions.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("dimensions_info").innerHTML="";
		
		
		if(frm.contents.value=='')
	{	
		document.getElementById("contents_info").innerHTML="<span class='alert'>Please enter Contents</span>";
			if(checkFocus!=1)
			{
				frm.contents.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("contents_info").innerHTML="";
		
		if(frm.goods.value=='')
	{	
		document.getElementById("goods_info").innerHTML="<span class='alert'>Please enter value of goods</span>";
			if(checkFocus!=1)
			{
				frm.goods.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("goods_info").innerHTML="";
		
		
		if(frm.weight.value=='')
	{	
		document.getElementById("weight_info").innerHTML="<span class='alert'>Please enter weight</span>";
			if(checkFocus!=1)
			{
				frm.weight.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("weight_info").innerHTML="";
		
		if(frm.crname.value=='')
	{	
		document.getElementById("crname_info").innerHTML="<span class='alert'>Please enter consignor name</span>";
			if(checkFocus!=1)
			{
				frm.crname.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("crname_info").innerHTML="";
		
		
		if(frm.craddress.value=='')
	{	
		document.getElementById("craddress_info").innerHTML="<span class='alert'>Please enter consignor address.</span>";
			if(checkFocus!=1)
			{
				frm.craddress.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("craddress_info").innerHTML="";
		
		if(frm.ceaddress.value=='')
	{	
		document.getElementById("ceaddress_info").innerHTML="<span class='alert'>Please enter consignee address.</span>";
			if(checkFocus!=1)
			{
				frm.ceaddress.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("ceaddress_info").innerHTML="";
		
		if(frm.cename.value=='')
	{	
		document.getElementById("cename_info").innerHTML="<span class='alert'>Please enter consignee name</span>";
			if(checkFocus!=1)
			{
				frm.cename.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("cename_info").innerHTML="";*/
	
	
	if(frm.sender_email.value=='')
	{	
		document.getElementById("cremail_info").innerHTML=lang_please_enter_consignor_email;
			if(checkFocus!=1)
			{
				frm.sender_email.focus();
				var checkFocus=1;
			}
	}
	else
	{
		var frmEmail1 =frm.sender_email.value.toLowerCase();	
		var frmEmailformat = /^[^@\s]+@([-a-z0-9]+\.)+([a-z]{2}|com|net|edu|org|gov|mil|int|biz|pro|info|arpa|aero|coop|name|museum)$/;
		if (!frmEmailformat.test(frmEmail1)) 
		{
			document.getElementById("cremail_info").innerHTML=lang_please_enter_valid_consignor_email;
			if(checkFocus!=1)
			{	frm.sender_email.focus();	
			var checkFocus=1;
			}
		}
		else
		document.getElementById("cremail_info").innerHTML="";
	}
	
	
	/*if(frm.crfax.value=='')
	{	
		document.getElementById("crfax_info").innerHTML="<span class='alert'>Please enter consignor fax</span>";
			if(checkFocus!=1)
			{
				frm.crfax.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("crfax_info").innerHTML="";
		
		if(frm.cefax.value=='')
	{	
		document.getElementById("cefax_info").innerHTML="<span class='alert'>Please enter consignee fax</span>";
			if(checkFocus!=1)
			{
				frm.cefax.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("cefax_info").innerHTML="";
		
		if(frm.rdate.value=='')
	{	
		document.getElementById("rdate_info").innerHTML="<span class='alert'>Please enter date</span>";
			if(checkFocus!=1)
			{
				frm.rdate.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("rdate_info").innerHTML="";
		
		if(frm.hours_sel.value=='' || frm.minute_sel.value=='' )
	{	
		document.getElementById("rtime_info").innerHTML="<span class='alert'>Please Select Date and Time</span>";
			if(checkFocus!=1)
			{
				frm.hours_sel.focus();
				var checkFocus=1;
			}
	}
	else
		document.getElementById("rtime_info").innerHTML="";
	*/
		
	if(checkFocus==1)
		return false;
	else
		return true;

}

//==================================================new working ======================================================//
function add_country(frm)//===================================this is function use for country selection tpl===//		 
{ 
	var checkFocus=0;
  if(frm.country_name.value=='')
   	{
	 document.getElementById("alert_name").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.country_name.focus();
			   checkFocus=1;
		  }
   	}
   else
   {
	   //alert("xxxxxxxxxxxxxxxxx");
	   ajax();
				if (doc)
				{
					value_one=(document.getElementById("country_name").value);
					value_two=(document.getElementById("old_country_name").value);
					//alert(value_one);alert(value_two);
					if(value_one!==value_two)
					{
				    doc.open("GET", site_url+"/ajax.php?section=check_country_exits&country_name="+frm.country_name.value,false);   
					doc.send(null);
					}
				}
		//alert(doc.responseText);//return false;
				 //country_name=+frm.edit_id.value;
			//if(country_name=='')
			   if(doc.responseText==1)
			   {	
					alert(lang_Country_already_exits);
					frm.country_name.focus();
					var	 checkFocus=1;
			   }
			   
			   else
				document.getElementById("alert_name").style.borderColor='';
   }
 
	  
	 
	 if(frm.country_flage.value!='')
	   {
		  
		var file = frm.country_flage.value;
		var mime = file.substr(file.lastIndexOf('.'));
		if (mime!= '.gif' && mime!= '.jpg' && mime!= '.pjpg' && mime!= '.JPG' && mime!= '.GIF' && mime!= '.jpeg' && mime!= '.JPEG' && mime!= '.png' && mime!= '.PNG' )
		  {
			alert(lang_please_upload_valid_file);

			if(checkFocus!=1)
			  {
				frm.country_flage.focus();
				var checkFocus=1;
			  }
		 }
	
	   }else
				document.getElementById("alert_image").style.borderColor='';		   
	  
	  
	  if(frm.title.value=='')
   	{
	 document.getElementById("alert_title").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.title.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_title").style.borderColor=''; 
	   
  	  if(frm.description.value=='')
   	{
	 document.getElementById("alert_description").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.description.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_description").style.borderColor='';   
	  
	if(frm.keyword.value=='')
   	{
	 document.getElementById("alert_keyword").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.keyword.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_keyword").style.borderColor='';
	  
	  
	 if(checkFocus==1)
		return false;
	 else	
		 return true;

}

function frm_add_state(frm)//===================================this is function use for add state===//		 
{ 
	var checkFocus=0;
  if(frm.sel_country.value=='')
   	{
	 document.getElementById("sel_country").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.sel_country.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("sel_country").style.borderColor='';
	  
	  if(frm.state_name.value=='')
   	{
				
	 document.getElementById("state_name").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.state_name.focus();
			   checkFocus=1;
		  }
   	}
  /* else
      document.getElementById("alert_state_name").innerHTML="";*/
	  else
   {
	   //alert("xxxxxxxxxxxxxxxxx");
	 var old_state_name=  document.getElementById('old_state_name').value;
	   ajax();
				if (doc)
				{
				//alert ("hello");
				   doc.open("GET", site_url+"/ajax.php?section=check_state_exits&country_name="+frm.sel_country.value+"&state_name="+frm.state_name.value+"&old_state_name="+old_state_name, false);   
					doc.send(null);
				}
		//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
				alert(lang_state_aleredy_exits);
					frm.state_name.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("state_name").style.borderColor='';	
   }  

	
	  
	   if(frm.title.value=='')
   	{
	 document.getElementById("title").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.title.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("title").style.borderColor='';
	   
  	  if(frm.description.value=='')
   	{
	 document.getElementById("alert_description").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.description.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_description").style.borderColor='';  
	  
	if(frm.keyword.value=='')
   	{
	 document.getElementById("alert_keyword").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.keyword.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("alert_keyword").style.borderColor='';
	  
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

}


function add_city_name(frm)//===================================this is function use for add state===//		 
{ 
	var checkFocus=0;
	var edit_id=document.getElementById('edit_id').value;
  if(frm.sel_country.value=='')
   	{
	 document.getElementById("sel_country").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.sel_country.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("sel_country").style.borderColor='';
	  
	  if(frm.sel_state.value=='')
   	{
	 document.getElementById("sel_state").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.sel_state.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("sel_state").style.borderColor='';
	  
	  
	   if(frm.city_name.value=='')
   	{
	 document.getElementById("city_name").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.city_name.focus();
			   checkFocus=1;
		  }
   	}
  /* else
      document.getElementById("alert_city_name").innerHTML="";*/
	    else
   {
	
	if(edit_id =='')
	{
	   //alert("xxxxxxxxxxxxxxxxx");
	   ajax();
				if (doc)
				{
				//alert ("hello");
				   doc.open("GET", site_url+"/ajax.php?section=check_city_exits&country_name="+frm.sel_country.value+"&state_name="+frm.sel_state.value+"&city_name="+frm.city_name.value, false);   
					doc.send(null);
				}
		//alert(doc.responseText);//return false;
			   if(doc.responseText==1)
			   {	
				alert(lang_city_aleredy_exits);
					frm.city_name.focus();
					var	 checkFocus=1;
			   }
			   else
				document.getElementById("city_name").style.borderColor='';
   }
   else
   document.getElementById("city_name").style.borderColor='';
   }  
   

	   if(frm.title.value=='')
   	{
	 document.getElementById("title").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.title.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("title").style.borderColor=''; 
	   
  	  if(frm.description.value=='')
   	{
	 document.getElementById("description").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.description.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("description").style.borderColor='';
	  
	if(frm.keyword.value=='')
   	{
	 document.getElementById("keyword").style.borderColor='#F00';
	     if(checkFocus!=1)
		  {
			   frm.keyword.focus();
			   checkFocus=1;
		  }
   	}
   else
      document.getElementById("keyword").style.borderColor='';
	 
	 if(checkFocus==1)
		 return false;
	 else
		 return true;

}
