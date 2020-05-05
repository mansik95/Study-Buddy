<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$this->title = 'Exam Builder';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-about">
    <h1><?= Html::encode($this->title) ?></h1>

	<div class="row">
			<div class="col-md-12">
				<div class="panel panel-primary">
					<div class="panel-heading">Step 1: Add Exam Details</div>
					<div class="panel-body">
						<form method="POST" action="http://studybuddy.linuxdemo.wwhnetwork.net/exam/saveexam?return=" accept-charset="UTF-8" class="form-horizontal" id="formID">
						<input name="_token" type="hidden" value="ViQdEq41LNmqmLqbj2JKgNXQ4x0zBXVIqqPqXY3x">
						<div class="col-md-12">
						</div>
						<div class="col-md-12">
							<div class="form-group">
								<label for="Name" class=" control-label">Title <span class="asterix"> * </span></label>
								<input class="form-control" placeholder="" required="true" name="title" type="text">
								<div id="errorMessageDiv" class="my-error-class" style="display:none;">Please fill the title.</div>
							</div>
						</div>
						<div class="col-md-12"></div>
						<div class="col-md-12">
							<div class="form-group">
								<label for="Name" class=" control-label">Cycle</label>
								<p>
									Leaving Cert Subjects <input type="radio" name="cycle" value="1" required="" class="pull-right" checked="true">
								</p>
								<p>
									Junior Cert Subjects <input type="radio" name="cycle" value="2" required="" class="pull-right">
								</p>
							</div>
						</div>
						<div class="col-md-12"></div>
						<div class="col-md-12">
							<div class="form-group"><input class="btn-sm hvr-fade btn btn-primary" type="submit" value="NEXT"></div>
						</div>
						</form>
					</div>
				</div>
			</div>
	</div>
	<div class="row">
			<div class="col-md-12">
			<div class="panel panel-success">
				<div class="panel-heading">Step 2: Pick a Subject</div>
				<div class="panel-body">
					<p>When you select an exam, subjects will appear here.</p>
				</div>
			</div>
		</div>
	</div>			
</div>
