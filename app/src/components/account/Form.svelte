<script>
    // export let uid;
    // export let db;

    // const user_ref = db.ref('users/' + uid);
    // const d = new Date();
    // const t = d.getTime();
    // var exists = false;
    // user_ref.orderByChild('signed_up_at').equalTo(uid).on('child_added', function(s) {
    //     console.log(s);
    //     if (s.exists()) {
    //         exists = true;
    //         console.log(exists);
    //     }
    // });
    // if (!exists) {
    //     user_ref.set({
    //             signed_up_at: t
    //         });
    // }
    // exists = false;
    // const form_ref = db.ref('/users/' + uid + '/forms');
    // form_ref.on("child_added", function(s) {
    //     if (s.exists()) {
    //         exists = true;
    //     }
    // });
    // if (!exists) {
    //     form_ref.push({
    //         "created_at": t,
    //         "questions": {
    //             "First name": {
    //                 "order": 1,
    //                 "type": "text",
    //                 "required": true
    //             },
    //             "Last name": {
    //                 "order": 2,
    //                 "type": "text",
    //                 "required": true
    //             },
    //             "Phone number": {
    //                 "order": 3,
    //                 "type": "number",
    //                 "required": true
    //             },
    //             "Favorite food": {
    //                 "order": 4,
    //                 "type": "check",
    //                 "required": false
    //             }
    //         }
    //     });
    // }


</script>