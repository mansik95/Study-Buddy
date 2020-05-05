<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\ExamQuestion */

$this->title = 'Create Exam Question';
$this->params['breadcrumbs'][] = ['label' => 'Exam Questions', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="exam-question-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
