<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Year */

$this->title = 'Update Year: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Years', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->year_id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="year-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
