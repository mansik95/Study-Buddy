<?php

namespace backend\controllers;

use Yii;
use app\models\Topic;
use app\models\TopicSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\helpers\ArrayHelper;
use yii\helpers\Html; 


/**
 * TopicController implements the CRUD actions for Topic model.
 */
class TopicController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    public function actionLists($id)
    {
        
        $counttopic = Topic::find()
                ->where(['subject_id' => $id])
                ->count();

        $topic = Topic::find()
                ->where(['subject_id' => $id])
                ->all();

        if($counttopic>0){
            foreach($topics as $topic){
                echo "<option value='".$topic->topic_id."'>".$topic->name."</option>";
            }
        }
        else{
            echo "<option>-</option>";
        }
        
        //echo "<option>-</option>";

    }

    /**
     * Lists all Topic models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new TopicSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Topic model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Displays a single Topic model.
     * @param integer $id
     * @return mixed
     */
    public function getCreatedBy(){
   
    $topicId = $this->topic_id;// this is your product id.
    $createdBy = User::model()->findByPk($this->created_by)->username; //update this line according to your need to fetch name.
    return $createdBy; 
    }

    /**
     * Creates a new Topic model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Topic();

        if(Yii::$app->request->isAjax && $model->load(Yii::$app->request->post()))
            {
                Yii::$app->response->format='json';
                return ActiveForm::validate($model);
            }

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->topic_id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Topic model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $postValue=Yii::$app->request->post();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->topic_id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Topic model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Topic model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Topic the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Topic::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
    /**
     * Lists all Topic models.
     * @return mixed
     */
    public function actionSubjectTopic()
    {
        $subjectId = $_REQUEST['subjectid'];
        //$stateData = Topic::model()->findAll("subject_id = '$subjectId'");
        $topicData = Topic::find()
                ->where(['subject_id' => $subjectId])
                ->all();
        //echo $query->createCommand()->getRawSql();die;

        $dataOptions = array();
        foreach ($topicData as $topic) {
            $dataOptions[$topic->topic_id] = $topic->name;
        }
        $data =  $dataOptions;
    
        $state = isset($_POST['hidden_state']);
        $html = '<option value="">Select Topic</option>';
        foreach($data as $value=>$name) {
            $html .= "<option value=".$value.">".$name."</option>";
        }
        echo $html;
        die;
    }

    

    
}
