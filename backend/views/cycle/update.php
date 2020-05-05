<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Cycle */

$this->title = 'Update Cycle: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Cycles', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->cycle_id]];
$this->params['breadcrumbs'][] = 'Update';
//var_dump($model->isNewrecord);
//die();
$session= Yii::$app->session;
//echo '<pre>';
//print_r (Yii::$app->user->identity);

$model->update_by= Yii::$app->user->getId();
$model->updated_at=date('Y-m-d H:i:s');

?>
<div class="cycle-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
