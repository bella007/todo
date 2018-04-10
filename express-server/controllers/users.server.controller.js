import User from '../models/users.server.model';

export const getUsers = (req, res) => {
    User.find((err, users) => {
            if (err) {
                return res.json({'success': false, 'message': 'Some Error'});
            }

            return res.json({'success': true, 'message': 'Todos fetched successfully', users});
        }
    );
};

export const addUsers = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        return res.json({'success': true, 'message': 'Todo added successfully', user});
    })
};

export const deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;

        return res.json({'success': true, 'message': 'DELETED'});
    });
};

export const editUser = (req, res) => {

    let field = req.body.key_field;
    User.findOneAndUpdate({_id: req.body.user_id}, {[field]: req.body.value_field}, (err, user) => {
        console.log(user);
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        return res.json({'success': true, 'message': 'EDITED'});
    })

};

export const getTasks = (req, res) => {
    console.log('req.params', req.params);
    User.find({_id:req.params},(err, tasks) => {
            if (err) {
                console.log(err)
                return res.json({'success': false, 'message': err});
            }
            return res.json({'success': true, 'message': 'Todos fetched successfullqy', tasks});

        }
    );

};
