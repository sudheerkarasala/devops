<div id="footer"></div>
    <script src="templates/admin/admin_assets/js/bootstrap.min.js"></script>
    <script src="templates/admin/admin_assets/js/jquery.metisMenu.js"></script>
    <script src="templates/admin/admin_assets/js/morris/raphael-2.1.0.min.js"></script>
    <script src="templates/admin/admin_assets/js/morris/morris.js"></script>
    <!-- Custom Js -->
    <script src="templates/admin/admin_assets/js/custom-scripts.js"></script>
    <script src="templates/admin/admin_assets/js/custom.js"></script>
	 <link rel="stylesheet" href="templates/css/bootstrap-select.css">
	<script src="templates/js/bootstrap-select.js"></script>

<!--=============chat options===========-->
 <div class="container" id="online_chat_window" style="display: none;"  >
  <div class="row col-md-12 pull-right">
    <div class="row chat-window-leftside col-xs-5 col-md-11 pull-right" id="chat_window_1">
      <div class="col-xs-12 col-md-12">
        <div class="chatpanel panel-default">
          <div class="panel-heading top-bar">
            <div class="col-md-8 col-xs-8">
              <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> Chat Window</h3>
            </div>
            <div class="col-md-4 col-xs-4" style="text-align:right;">
            <div id="minmax_change" style="display:inline;"> <a onclick="reaison_min()" >
            <span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a> </div>
            <a onclick="reaison_close()"><span  class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a> </div>
          </div>
    
    
     
    

          
          <input type="hidden" id="user_window_count" value="0"/>
                     <div class="panel-body msg_container_base" id="user_online" style="display:block;">
                                  <!--  
                    </form>
                    </div>-->
             
  		</div>
      </div>
    </div>
  </div>

 <div class="row col-md-12 pull-right" id="message_window" style="display: none;">
    <div class="row chat-window col-xs-5 col-md-8 pull-right" id="chat_window_1">
      <div class="col-xs-12 col-md-12">
        <div class="chatpanel panel-default">
          <div class="panel-heading top-bar">
            <div class="col-md-8 col-xs-8">
              <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span><span id="user_name"></span></h3>
            </div>
            <div class="col-md-4 col-xs-4" style="text-align: right;"> <a onclick="reaison_min_user()" ><span id=""class="glyphicon glyphicon-minus icon_minim"></span></a> <a onclick="reaison_close_user()"><span class="glyphicon glyphicon-remove icon_close" ></span></a> </div>
          </div>
            <div class="panel-body" id="user_min_max" style="display:block;background-color:#FFF;">
          <div class="msg_container_base" id="user_windows">

 </div>
  <div class="panel-footer">
            <div class="input-group">
              <input id="input_message" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />
              <span class="input-group-btn">
              <button class="btn btn-primary btn-sm" id="btn-chat" onclick="send_message()"  >Send</button>
              </span> </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<!--====================================-->

<!--==============================wating loader===========================-->
 <!--==========================loader modul=============================-->
    <div class="modal fade bs-example-modal-sm" id="myPleaseWait" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
        <div class="modal-dialog modal-sm" style="margin-top:22%; margin-left:42%;">
           <img src="templates/images/ajay_wating_loader.gif" />
        </div>
	</div>
 <!--===================================================================-->
 
<!--======================================================================-->
<div id="shipment_wating_id" style="display:none; box-shadow: 0 0 15px #888888;  position:fixed; vertical-align:middle; top:50%; left:50%; margin-top:-125px; margin-left:-150px; z-index:99999">
  <div  style="width:400px; background-color: #fff;border:2px solid #FB9337;text-align:center;padding:0px;margin:0px">
  
    <div style="margin:0px; padding: 3px 0px 2px 0px;text-align:center;background-color:#FB9337;border:1px solid #FB9337 ;width:100%;"> <a title="Upgrade Package" class="VSlabel" style="text-weight:bold;text-decoration:none;color:#fff;"><b>Please Wait...</b></a> </div>
  </div>
  <div style=" height:auto; background-color:#FCFCFC; padding:8px; padding-left:50px;">
 					
                   <img src="images/please_wait.gif" />
                    
  </div>
</div>
</body>

</html>