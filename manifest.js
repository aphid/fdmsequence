
var groupdata =  
        [
        
        {
            "code": "176",
            "title": "Experimental Video Workshop",
            "instructor": "Gustavo Vazquez",
            "Intro": [ "gustavo_intro" ],
            "Explanation": [
                "gustavo_explanation_1",
                "gustavo_explanation_2",
                "gustavo_explanation_3"
            ],
            "Followup": [
                "class_project",
                "16mm_gustavo",
                "challenges",
                "16mm",
                "gaby",
                "carmella",
                "16mm-film",
                "in_class"   
            ]
        },    
        {
            "code": "20B",
            "title": "Introduction to Television Culture and Society",
            "instructor": "LS Kim",
            "Intro": [ "ls_kim_20b" ],
            "Explanation": [
                "ls_kim_explanation_1",
                "ls_kim_explanation_2",
                "ls_kim_explanation_3"
            ],
            "Followup": [
                "ls_kim_2",
                "julie_1",
                "ls_kim_1",
                "blair_1",
                "blair_2",
                "blair_3",
                "in_class_2",
                "julie_2",
                "in_class",
                "blair_4",
                "blair_5"
            ]
        }     
            
        

    ];
    
var sequence = {
    "clips": [{
        "id": 'gustavo_intro',
        "type": "Intro",
        "title": "176 Introduction",
        "description": "Gustavo introduces FDM 176",
        "connectsTo": ['gustavo_explanation_1', 'gustavo_explanation_2', 'gustavo_explanation_3'],
    }, {
        "id": 'gustavo_explanation_1',
        "title": "Explanation 1",
        "type": "Explanation",
        "description": "...",
        "connectsTo": ['class_project'],
     },{
        "id": 'gustavo_explanation_2',
        "title": "Explanation 2",
        "description": "...",
        "connectsTo": ['class_project'],
     },{
        "id": 'gustavo_explanation_3',
        "title": "Explanation 2",
        "description": "...",
        "connectsTo": ['class_project'],
     }, {
        "id": 'class_project',
        "title": "Class Project",
        "description": "",
        "connectsTo": ['class_project']

    }]
};