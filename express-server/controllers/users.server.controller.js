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
    console.log(req.body);
    const newUser = new User(req.body);
    console.log('newUser', newUser);
    newUser.save((err, user) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }
        return res.json({'success': true, 'message': 'Todo added successfully', user});
    })
};

export const deleteUser = (req, res) => {
    console.log('req.params.id', req.params.id);
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;

        return res.json({'success': true, 'message': 'DELETED'});
    });
};

export const editUser = (req, res) => {
    console.log('HELLOE FROM CONTROLLER');
    User.findOneAndUpdate({_id: req.body.data._id}, req.body.data, {title: req.body.input_val}, (err, user) => {
        if (err) {
            return res.json({'success': false, 'message': 'Some Error'});
        }

        return res.json({'success': true, 'message': 'EDITED'});
    })

};
