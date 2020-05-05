<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Cycle */

$this->title = 'Create Cycle';
$this->params['breadcrumbs'][] = ['label' => 'Cycles', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="cycle-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
