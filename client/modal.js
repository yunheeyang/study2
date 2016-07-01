Template.modal.events({
    'click #btnComment' : function(evt,tmpl) {
        evt.preventDefault();
        if (!Meteor.user()) {
            return alert('로그인을 하시오.');
        }

        console.log("btnComment clicked!");
        var comment = $('inpComment').val();
        var board = Session.get('selectedData');

  

        // 1.있다면 어레이를 꺼내어서 추가
        // if(board.hasOwnProperty('comments')){
        //   var obj= {};
        //  obj.comment = comment;
        // obj.user = Meteor.user();
        // board.comments.push(obj);
        //}
        //2.  false이면 어레이에 넣어서 생성
        // else{
        //    board.comments = [obj];
        //}

//        Boards.update({_id: board._id}, board);

        //  }

    }
});

Template.modal.helpers({

        name:function() {
        var obj=Session.get('selectedDdata');
        return obj.inName;

    },
    bodyText: function() {
        var obj = Session.get('selectedData');
        return obj.inpTextarea;
    },
    comments: function(){
        var result = [];

        var arr = Session.get('selectedData').comments;
        if(!arr){
            arr = [];
        }
        for(var i=0; i< arr.length; i++){
        var obj = {
            comment: arr[i]
        };
            result.push(obj);
        }
        return result;
    }

});