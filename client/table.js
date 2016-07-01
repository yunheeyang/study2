Template.table.helpers(
    {
        boards: function() {
           return Boards.find().fetch();
        }
    }

)

Template.table.events(
    {
       "click tr": function(evt,tmpl) {
           
           Session.set('selectedData', this);
           
           $('#targetModal').text($(this)[0].pj);
           $('#myModalLabel').text($(this) [0].inName);
            // console.log($(evt).attr('dataId'));
        }
    }

)