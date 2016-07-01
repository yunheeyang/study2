Template.Insertdata.events(
    {
        "click #btn": function(evt, tmpl){
            evt.preventDefault();

            var user = Meteor.user();

            if(user==null){
                alert("로그인이 필요합니다.");
                return
            }

            var image= $('#inpFile').val();

            if(image.length >0){
                fileObj =$('#inpFile').files[0];
                fileReader.onload = function(file){
                    obj.image =file.srcElement.result;
                }
            }

            var obj ={};
            obj.inName=$('#inName').val();
            obj.inNumber=$('#inNumber').val();
            obj.inEmail=$('#inEmail').val();
            obj.ck=$('#ck').val();
            obj.pj=$('#pj').val();
            Boards.insert(obj);

            obj.inName=$('#inName').val("");
            obj.inNumber=$('#inNumber').val("");
            obj.inEmail=$('#inEmail').val("");
            obj.pj=$('#pj').val("");

        }
    }
);