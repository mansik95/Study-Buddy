<?php

namespace backend\controllers;

use Yii;
use app\models\Questions;
use app\models\QuestionSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * QuestionController implements the CRUD actions for Questions model.
 */
class QuestionController extends Controller
{
    /**
     * @inheritdoc
     */

    public $answer_image;
    public $question_image;

    //public $filer;

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

    /**
     * Lists all Questions models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new QuestionSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Questions model.
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
     * Creates a new Questions model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Questions();
        if ($model->load(Yii::$app->request->post())) {


            $imageName="ques".time();
            $imageName1="ans".time();

            if(Yii::$app->request->isAjax && $model->load(Yii::$app->request->post()))
            {
                Yii::$app->response->format='json';
                return ActiveForm::validate($model);
            }
            if($_FILES['Questions']['name']['question_image'] != '')
            {
                $model->question_image=UploadedFile::getInstance($model, 'question_image');
                if(isset($model->question_image) && !empty($model->question_image))
                {
                    $model->question_image->name = 'uploads/'.$imageName.'.'.$model->question_image->extension;
                    $model->question_image->saveAs('uploads/'.$imageName.'.'.$model->question_image->extension );
                }
            }
            if($_FILES['Questions']['name']['answer_image'] != ''){

                $model->answer_image=UploadedFile::getInstance($model, 'answer_image');
                if(isset($model->question_image) && !empty($model->question_image))
                {
                    $model->answer_image->name = 'uploads/'.$imageName1.'.'.$model->answer_image->extension;
                    $model->answer_image->saveAs('uploads/'.$imageName1.'.'.$model->answer_image->extension );
                }
            }

            $model->save(false);
            //rename & DB update query.
            return $this->redirect(['view', 'id' => $model->question_id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Questions model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $oldQuestionImage = $model->question_image;
        $oldAnswerImage = $model->answer_image;
        $postValue=Yii::$app->request->post();

        //print_r($postValue);

        /*if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->question_id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }*/
        if ($model->load(Yii::$app->request->post())) {


            $imageName="ques".time();
            $imageName1="ans".time();

            if(Yii::$app->request->isAjax && $model->load(Yii::$app->request->post()))
            {
                Yii::$app->response->format='json';
                return ActiveForm::validate($model);
            }
            if($_FILES['Questions']['name']['question_image'] != '')
            {
                $model->question_image=UploadedFile::getInstance($model, 'question_image');
                if(isset($model->question_image) && !empty($model->question_image))
                {
                    $model->question_image->name = 'uploads/'.$imageName.'.'.$model->question_image->extension;
                    $model->question_image->saveAs('uploads/'.$imageName.'.'.$model->question_image->extension );
                }
            }else{
                $model->question_image = $oldQuestionImage;
            }
            if($_FILES['Questions']['name']['answer_image'] != ''){

                $model->answer_image=UploadedFile::getInstance($model, 'answer_image');
                if(isset($model->question_image) && !empty($model->question_image))
                {
                    $model->answer_image->name = 'uploads/'.$imageName1.'.'.$model->answer_image->extension;
                    $model->answer_image->saveAs('uploads/'.$imageName1.'.'.$model->answer_image->extension );
                }
            }else{
                $model->answer_image = $oldAnswerImage;
            }
            
            $model->save(false);
            //rename & DB update query.
            return $this->redirect(['view', 'id' => $model->question_id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Questions model.
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
     * Finds the Questions model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Questions the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Questions::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
    
}
