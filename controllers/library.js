class LibraryCtrl {

    Detail(req, res) {
        var LibraryModel = require('./../models/library/library');
        LibraryModel.findById(req.params.id, function(err, result){
            res.render('library/detail', { title: 'Library', item : result });
        });
    }

    Display(req, res) {
        var LibraryModel = require('./../models/library/library');
        LibraryModel.find({}).then(function(result){
            res.render('library/display', { title: 'Library', list : result });
        });
    }

    Delete(req, res) {
        var LibraryModel = require('./../models/library/library');
        LibraryModel.findById(req.params.id).remove( function(){
            res.redirect("/library/display");
        });
    }

    GetUpdate(req, res) {
        var LibraryModel = require('./../models/library/library');
        LibraryModel.findById(req.params.id, function(err, result){
            res.render('library/update', { title: 'Library', id: req.params.id, item: result});
        });
    }

    PostUpdate(req, res) {
        var LibraryModel = require('./../models/library/library');
        LibraryModel.findById(req.params.id, function(err, result){
            result.type = req.body.type;
            result.title = req.body.title;
            result.pages["start"] = req.body.pages_start;
            result.pages["end"] = req.body.pages_end;
            result.year = req.body.year;
            result.booktitle = req.body.booktitle;
            result.url = req.body.url;

            // @todo Gestion des auteurs

            result.save().then(function(result){
                res.redirect('/library/detail/'+result._id);
            });
        });
    }

    Create(req, res) {
        var LibraryModel = require('./../models/library/library');
        var myLibrary = new LibraryModel();

        LibraryModel.findOne().sort({_id : -1}).exec(function(err, item) {
            if(err) console.log(err);
            if(item) {
                myLibrary._id = item._id + 1 ;
                myLibrary.type = req.body.type;
                myLibrary.title = req.body.title;
                myLibrary.pages = [];
                myLibrary.pages["start"] = req.body.pages_start;
                myLibrary.pages["end"] = req.body.pages_end;
                myLibrary.year = req.body.year;
                myLibrary.booktitle = req.body.booktitle;
                myLibrary.url = req.body.url;
                myLibrary.author = [];

                myLibrary.save().then(function(result){
                     res.redirect('/library/detail/'+result._id);
                });
            }
        });
    }
}
module.exports = LibraryCtrl;